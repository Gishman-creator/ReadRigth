// controllers/logoutController.js
const pool = require('../../config/db');
const { validateAccessToken } = require('../../middlewares/tokenValidationMiddleware');

exports.logout = [
    validateAccessToken, // Use the token validation middleware
    async (req, res) => {
        const { email } = req.user;

        try {
            // Remove the refresh token from the database
            await pool.query('UPDATE admin SET refresh_token = NULL WHERE email = ?', [email]);

            // Optionally, you could also blacklist the access token or do other cleanup if needed

            res.status(200).json({ message: 'Successfully logged out' });
        } catch (err) {
            res.status(500).json({ message: 'Server error', error: err.message });
        }
    }
];
