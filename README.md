# anton-keygen-pro 🔑

`anton-keygen-pro` is a Node.js module designed to generate different types of keys with customizable formats. This module is perfect for developers who need reliable and random key generation for their applications.

## Installation

To install this package, simply run the following command in your project directory:

```bash
npm install anton-keygen-pro
```

## Usage

After installation, you can require the package and use it to generate different types of keys.

```javascript
const anton = require('anton-keygen-pro');

console.log(anton.key1);  // Outputs an alphanumeric key
console.log(anton.key7);  // Outputs a random hexadecimal key
```

### Example Output
```bash
{
  key1: 'A1B2-C3D4-E5F6-G7H8',
  key2: 'ABCD-EFGH-IJKL-MNOP',
  key3: '1234-5678-9101-1121',
  key4: 'A1B2-C3D4-E5F6',
  key5: 'ABCD-EFGH-IJKL',
  key6: '1234-5678-9101',
  key7: '9f86d081884c7d659a2feaa0c55ad015'
}
```

## Key Types
- `key1`: Alphanumeric key (e.g., 'A1B2-C3D4-E5F6-G7H8')
- `key2`: Alphabetic key (e.g., 'ABCD-EFGH-IJKL-MNOP')
- `key3`: Numeric key (e.g., '1234-5678-9101-1121')
- `key4`: Custom alphanumeric key with 3 segments (e.g., 'A1B2-C3D4-E5F6')
- `key5`: Custom alphabetic key with 3 segments (e.g., 'ABCD-EFGH-IJKL')
- `key6`: Custom numeric key with 3 segments (e.g., '1234-5678-9101')
- `key7`: Random hexadecimal key (e.g., '9f86d081884c7d659a2feaa0c55ad015')

## Error Handling
The module includes error handling to ensure that invalid parameters or key types are caught and reported:

```javascript
try {
  const invalidKey = generateKey(0, 4, ''); // This will throw an error
} catch (error) {
  console.error('Failed to generate key:', error.message);
}
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! If you find any issues or have suggestions, feel free to submit a pull request or open an issue.

## Testing

To run the tests, simply execute:

```bash
npm test
```