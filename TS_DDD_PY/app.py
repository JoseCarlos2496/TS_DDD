from flask import Flask, request, send_file
from io import BytesIO
from reportlab.pdfgen import canvas

app = Flask(__name__)

@app.route('/convert', methods=['POST'])
def convert_to_pdf():
    # Verificar si el JSON contiene el campo 'content'
    data = request.get_json()
    if not data or 'content' not in data:
        return {"error": "El campo 'content' es obligatorio."}, 400

    content = data['content']

    # Crear un PDF en memoria
    pdf_buffer = BytesIO()
    pdf = canvas.Canvas(pdf_buffer)
    pdf.drawString(100, 750, content)  # Escribir el contenido en el PDF
    pdf.save()

    # Regresar el PDF como respuesta
    pdf_buffer.seek(0)
    return send_file(pdf_buffer, as_attachment=True, download_name="output.pdf", mimetype='application/pdf')

    # # Regresar el PDF como respuesta
    # pdf_buffer.seek(0)
    # return send_file(
    #     pdf_buffer,
    #     as_attachment=False,  # Cambiar a False para mostrar el cuadro de diálogo
    #     download_name="output.pdf",
    #     mimetype='application/pdf'
    # )

if __name__ == '__main__':
    app.run(debug=True)