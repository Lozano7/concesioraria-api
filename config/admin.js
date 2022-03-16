module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'bd3aab2417cd129a1bdecb5e06c8554a'),
  },
});
