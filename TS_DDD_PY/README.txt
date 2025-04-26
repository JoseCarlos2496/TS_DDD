
### Instrucciones:

# 1. Ejecuta el servidor Flask:
        # python app.py
   
   
# 2. Realiza una solicitud POST al endpoint '/convert' con un JSON como este:
        # {
        #   "content": "Este es el contenido del PDF."
        # }
      
#    Puedes usar herramientas como Postman o 'curl':
        # curl -X POST -H "Content-Type: application/json" -d "{\"content\": \"Este es el contenido del PDF.\"}" http://127.0.0.1:6000/convert --output output.pdf
   
    # Esto generará un archivo PDF llamado `output.pdf` con el contenido proporcionado.