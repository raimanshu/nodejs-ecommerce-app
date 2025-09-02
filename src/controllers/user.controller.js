const httpStatus = require("http-status");
const UserService = require("../services/user.service");

const logger = require("../config/logger");

const getAllUsers = async (req, res) => {
    try {
        logger.debug(`Fetching all users initiated with request body ${JSON.stringify(req.body)} and query params ${JSON.stringify(req.query)}`);
        const users = await UserService.queryUsers({}, {});
        logger.debug(`Fetched ${users.length} users successfully`);
        return res.status(200).send({
            status: 200,
            message: "Fetched all users successfully",
            data: users,
        });
    } catch (error) {
        logger.error(`Error fetching users: ${error.message}`);
        return res.status(error.status || 500).send({
            status: error.status || 500,
            message: error.message || "Failed to fetch users",
        });
    }
};

const getUser = async (req, res) => {
    try {
        logger.debug(`Fetching user initiated with request body ${JSON.stringify(req.body)} and query params ${JSON.stringify(req.query)}`);
        const user = await UserService.getUserById(req.params.userId);
        logger.debug(`Fetch user with id ${req.params.userId} successfully`);
        return res.status(httpStatus.OK).send({
            status: httpStatus.OK,
            message: "Fetched user successfully",
            data: user,
        });
    } catch (error) {
        logger.error(`Error fetching user: ${error.message}`);
        return res.status(error.status || 500).send({
            status: error.status || 500,
            message: error.message || "Failed to fetch user",
        });
    }
};

const createUser = async (req, res) => {
    try {
        logger.debug(`Creating user initiated with request body ${JSON.stringify(req.body)}`);
        const user = await UserService.createUser(req.body);
        logger.debug(`Created user with id ${user.id} successfully`);
        return res.status(httpStatus.CREATED).send({
            status: httpStatus.CREATED,
            message: "User created successfully",
            data: user,
        });
    } catch (error) {
        logger.error(`Error creating user: ${error.message}`);
        return res.status(error.status || 500).send({
            status: error.status || 500,
            message: error.message || "Failed to create user",
        });
    }
};

const updateUser = async (req, res) => {
    try {
        logger.debug(`Updating user initiated with request body ${JSON.stringify(req.body)}`);
        const user = await UserService.updateUserById(req.params.userId, req.body);
        logger.debug(`Updated user with id ${req.params.userId} successfully`);
        return res.status(httpStatus.OK).send({
            status: httpStatus.OK,
            message: "User updated successfully",
            data: user,
        });
    } catch (error) {
        logger.error(`Error updating user: ${error.message}`);
        return res.status(error.status || 500).send({
            status: error.status || 500,
            message: error.message || "Failed to update user",
        });
    }
};

const deleteUser = async (req, res) => {
    try {
        logger.debug(`Deleting user initiated with request body ${JSON.stringify(req.body)}`);
        const user = await UserService.deleteUserById(req.params.userId);
        logger.debug(`Deleted user with id ${req.params.userId} successfully`);
        return res.status(httpStatus.OK).send({
            status: httpStatus.OK,
            message: "User deleted successfully",
            data: user,
        });
    } catch (error) {
        logger.error(`Error deleting user: ${error.message}`);
        return res.status(error.status || 500).send({
            status: error.status || 500,
            message: error.message || "Failed to delete user",
        });
    }
};

const getTotalUsers = async (req, res) => {
    try {
        logger.debug(`Counting users initiated with request body ${JSON.stringify(req.body)} and query params ${JSON.stringify(req.query)}`);
        const users = await UserService.queryUsers({}, {});
        logger.debug(`Counted ${users.length} users successfully`);
        return res.status(httpStatus.OK).send({
            status: httpStatus.OK,
            message: "Total user count fetched successfully",
            data: users.length,
        });
    } catch (error) {
        logger.error(`Error counting users: ${error.message}`);
        return res.status(error.status || 500).send({
            status: error.status || 500,
            message: error.message || "Failed to count users",
        });
    }
};

const getLimitedUsers = async (req, res) => {
    try {
        logger.debug(`Fetching limited users initiated with request body ${JSON.stringify(req.body)} and query params ${JSON.stringify(req.query)}`);
        const limit = parseInt(req.query.limit) || 10;
        const page = parseInt(req.query.page) || 1;
        const users = await UserService.queryUsers({}, { limit, page });

        logger.debug(`Fetched ${users.length} users successfully`);
        return res.status(httpStatus.OK).send({
            status: httpStatus.OK,
            message: "Fetched limited users",
            data: users,
        });
    } catch (error) {
        logger.error(`Error fetching limited users: ${error.message}`);
        return res.status(error.status || 500).send({
            status: error.status || 500,
            message: error.message || "Failed to fetch limited users",
        });
    }
};

const getFilteredUsers = async (req, res) => {
    try {
        logger.debug(`Fetching filtered users initiated with request body ${JSON.stringify(req.body)} and query params ${JSON.stringify(req.query)}`);
        const filter = req.body || {};
        const users = await UserService.queryUsers(filter, {});
        logger.debug(`Fetched ${users.length} users successfully`);
        return res.status(httpStatus.OK).send({
            status: httpStatus.OK,
            message: "Fetched filtered users",
            data: users,
        });
    } catch (error) {
        logger.error(`Error fetching filtered users: ${error.message}`);
        return res.status(error.status || 500).send({
            status: error.status || 500,
            message: error.message || "Failed to fetch filtered users",
        });
    }
};

module.exports = {
    getAllUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
    getTotalUsers,
    getLimitedUsers,
    getFilteredUsers,
};
