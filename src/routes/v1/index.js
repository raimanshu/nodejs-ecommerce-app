const express = require('express');
const adminRoutes = require('./admin.route');
const apiRoutes = require('./api.route');
const authRoutes = require('./auth.route');
const dashboardRoutes = require('./dashboard.route');

const router = express.Router();

const defaultRoutes = [
    // {path: '/admin', handler: adminRoutes},
    // {path: '/dashboard', handler: dashboardRoutes},
    {path: '/api', handler: apiRoutes},
    // {path: '/authentication', handler: authRoutes},
]

defaultRoutes.forEach(route => {
    console.log('route.path', route.path);
    router.use(route.path, route.handler);
});

module.exports = router;

