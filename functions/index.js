const {onDocumentCreated} = require("firebase-functions/v2/firestore");
const {onRequest} = require("firebase-functions/v2/https");
const {setGlobalOptions} = require("firebase-functions/v2");
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');

admin.initializeApp();

// For cost control
setGlobalOptions({ maxInstances: 10 });

// ⚙️ CONFIGURACIÓN DE EMAIL
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'sepulvedavicente1502@gmail.com',
        pass: 'cmimjcujhubtvvzk'  // Contraseña de aplicación de Gmail
    }
});

// 🔔 Función que se ejecuta cuando se crea un nuevo riego
exports.enviarNotificacionRiego = onDocumentCreated("riegos/{riegoId}", async (event) => {
    const snap = event.data;
    if (!snap) {
        console.log("No data associated with the event");
        return;
    }
    
    const riego = snap.data();
    
    // Datos del riego
    const fecha = riego.fecha;
    const email = riego.email;
    const nota = riego.nota || 'Sin nota';
    
    console.log(`📧 Enviando email a: ${email} para riego del ${fecha}`);
    
    // Configurar el email
    const mailOptions = {
        from: 'sepulvedavicente1502@gmail.com',
        to: email,                    // El email que ingresó el usuario
        subject: `🌸 Recordatorio de Riego - ${fecha}`,
        html: `
            <!DOCTYPE html>
            <html>
            <head>
                <style>
                    body {
                        font-family: 'Arial', sans-serif;
                        background: linear-gradient(135deg, #a3d9b3, #d5b8e2);
                        padding: 20px;
                    }
                    .container {
                        max-width: 600px;
                        margin: 0 auto;
                        background: white;
                        border-radius: 15px;
                        padding: 30px;
                        box-shadow: 0 10px 30px rgba(0,0,0,0.2);
                    }
                    h1 {
                        color: #6b2d84;
                        text-align: center;
                    }
                    .fecha {
                        background: #a3d9b3;
                        color: white;
                        padding: 15px;
                        border-radius: 10px;
                        text-align: center;
                        font-size: 1.5rem;
                        font-weight: bold;
                        margin: 20px 0;
                    }
                    .nota {
                        background: #f0f0f0;
                        padding: 15px;
                        border-radius: 10px;
                        margin: 15px 0;
                    }
                    .footer {
                        text-align: center;
                        color: #666;
                        margin-top: 20px;
                        font-size: 0.9rem;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <h1>🌸 Recordatorio de Riego 🌸</h1>
                    <p>Hola! Este es un recordatorio para regar tus orquídeas.</p>
                    
                    <div class="fecha">
                        📅 Fecha programada: ${fecha}
                    </div>
                    
                    <div class="nota">
                        <strong>📝 Nota:</strong><br>
                        ${nota}
                    </div>
                    
                    <p style="text-align: center; margin-top: 30px;">
                        <strong>🌿 No olvides regar tus plantas 🌿</strong>
                    </p>
                    
                    <div class="footer">
                        Sistema de Monitoreo de Orquídeas<br>
                        Vicente Muñoz - 2025
                    </div>
                </div>
            </body>
            </html>
        `
    };
    
    try {
        // Enviar el email
        await transporter.sendMail(mailOptions);
        console.log('✅ Email enviado exitosamente a:', email);
        
        // Actualizar el documento con el estado de envío
        await snap.ref.update({
            emailEnviado: true,
            emailEnviadoEn: admin.firestore.FieldValue.serverTimestamp()
        });
        
        return { success: true };
    } catch (error) {
        console.error('❌ Error al enviar email:', error);
        
        // Marcar como error
        await snap.ref.update({
            emailEnviado: false,
            emailError: error.message
        });
        
        throw error;
    }
});

// 🧪 Función de prueba (opcional) - para probar el envío de emails
exports.testEmail = onRequest(async (req, res) => {
    const mailOptions = {
        from: 'sepulvedavicente1502@gmail.com',
        to: 'sepulvedavicente1502@gmail.com', // Envía a ti mismo para probar
        subject: '🧪 Test - Sistema de Orquídeas',
        html: `
            <h1>✅ Test Exitoso</h1>
            <p>Si recibes este email, la configuración está correcta!</p>
        `
    };
    
    try {
        await transporter.sendMail(mailOptions);
        res.send('✅ Email de prueba enviado! Revisa tu bandeja de entrada.');
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('❌ Error: ' + error.message);
    }
});
