/* this file contains all of API calls on the movie database */

// Import dotenv to load environment variables
import dotenv from 'dotenv';

dotenv.config();

// Assign the API_KEY from the .env file to a variable
const API_KEY = process.env.API_KEY;
const BASE_URL = process.env.BASE_URL;

