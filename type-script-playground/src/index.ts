import { v5 as uuidv5 } from 'uuid';

// Define a namespace for generating UUID v5
const NAMESPACE = uuidv5.URL;

// Generate UUID v5 based on a name
const name = "example.com";
const uuid = uuidv5(name, NAMESPACE);

console.log(`Generated UUID v5: ${uuid}`);