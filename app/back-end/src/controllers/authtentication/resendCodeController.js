
const pool = require('../../config/db');
const { sendEmail } = require('../../services/emailService');
const { generateVerificationCode } = require('../../utils/verificationUtils');

exports.resendCode = async (req, res) => {
    const { email } = req.body;
    try {
        const [rows] = await pool.query('SELECT * FROM admin WHERE email = ?', [email]);

        if (rows.length > 0) {
            const user = rows[0];
            const verificationCode = generateVerificationCode();
            
            // Store the new verification code in the database
            await pool.query('UPDATE admin SET verification_code = ? WHERE email = ?', [verificationCode, email]);

            // Send the verification email
            await sendEmail(
                email,
                'New Verification Code',
                `Your new verification code is: ${verificationCode}`,
                `<p>Your new verification code is: <strong>${verificationCode}</strong></p>`
            );

            res.status(200).json({ message: 'Verification email resent' });
        } else {
            res.status(404).json({ message: 'Email not found' });
        }
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};