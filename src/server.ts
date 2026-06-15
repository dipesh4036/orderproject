import { Config } from './config/index.js';
import logger from './config/logger.js';

const startServer = () => {
    const PORT = Config.PORT;
    try {
        logger.info(`Starting server on port ${PORT}...`);
    } catch (error) {
        logger.error('Error starting server:', error);
    }
};

startServer();
