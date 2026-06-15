import winston from 'winston';
import { Config } from './index.js';

const logger = winston.createLogger({
    level: 'info',
    defaultMeta: { serviceName: 'auth-service' },
    transports: [
        // file level
        new winston.transports.File({
            level: 'info',
            dirname: 'logs',
            filename: 'combine',
            format: winston.format.combine(winston.format.timestamp(), winston.format.json()),
            silent: Config.NODE_ENV === 'development',
        }),

        // error level
        new winston.transports.File({
            level: 'error',
            dirname: 'logs',
            filename: 'error',
            format: winston.format.combine(winston.format.timestamp(), winston.format.json()),
            silent: Config.NODE_ENV === 'development',
        }),

        // console
        new winston.transports.Console({
            level: 'info',
            format: winston.format.combine(winston.format.timestamp(), winston.format.json()),
            silent: Config.NODE_ENV === 'development',
        }),
    ],
});

export default logger;
