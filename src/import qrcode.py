import qrcode
image= qrcode.make("http://localhost:5173/")
image.save("qrcode.png ","PNG")