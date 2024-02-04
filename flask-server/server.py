from flask import Flask, render_template, request, jsonify
from PIL import Image
import pyperclip
from flask_cors import CORS

app=Flask(__name__)
CORS(app)

@app.route("/")
def home():
    return "Hello, Flask Server!"

@app.route("/uploads")
def members():
    return {"members":["Member1","Member2","Member3"]}

@app.route('/generate', methods=['POST'])
def generate():
    image_file = request.files['image']
    image = Image.open(image_file)

    # Step 1: Resize the image
    width, height = image.size
    aspect_ratio = height / width
    new_width = int(request.form.get('width', 120))
    new_height = int(aspect_ratio * new_width * 0.6)  # Adjust the multiplier to achieve the desired height
    resized_image = image.resize((new_width, new_height))

    # Step 2: Convert to grayscale
    grayscale_image = resized_image.convert('L')

    # Step 3: Map pixel intensity to characters
    ascii_chars = '.'
    interval = 256 / len(ascii_chars)
    ascii_art = ''
    pixels = grayscale_image.getdata()
    for pixel_value in pixels:
        if pixel_value == 255:  # Check if pixel is white
            ascii_art += " "
        else:
            ascii_art += ascii_chars[int(pixel_value // interval)]

    # Step 4: Generate ASCII art
    ascii_lines = [ascii_art[i:i + new_width] for i in range(0, len(ascii_art), new_width)]
    ascii_output = '\n'.join(ascii_lines)

    # Step 5: Add border styling to the ASCII image
    border = '+' + '-' * new_width + '+'
    ascii_output_with_border = border + '\n' + '|' + ascii_output + '|' + '\n' + border

    # Step 6: Copy ASCII image to clipboard
    pyperclip.copy(ascii_output)

    response_data = {
        'ascii_output': ascii_output,
        'ascii_output_with_border': ascii_output_with_border
    }

    return jsonify(response_data)


if __name__=="__main__":
    app.run(debug=True)