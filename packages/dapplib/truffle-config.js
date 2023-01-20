require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea nature tail sign strategy cruise range purpose gown light army gift'; 
let testAccounts = [
"0x2d03619b40514111bf9dec1124c5aa38716c0d9959f25a594df77c230eef7317",
"0x05c7edbcb7c7104a4d81f8ecf2035fe74ce970ea58d0c237c739f8c45e89f241",
"0xb7466246ff8303d486d70a2458a3d60edbf28d868ec02034e36c2fda99dfda41",
"0x42a3a21a1946ae46950328a9bdce9e9c9ad2a4977e0aab92ec7989eb9fd78b86",
"0x762edafd9f4fb579cd5d49b811a88c815b845a178b2b057f21851d47e8a185ab",
"0xc8cc68d0b8c55fe92b843bcfe883f7064529694215cc610e1f7e6e1e432bc4bb",
"0x766b4847d885eb2bd8795e0b1180859f9c70c932b970accba75116a4a51b1b0e",
"0x969a72a5c15b5154cb54db53117e3efde83ea3999ae15f14cab514b8b07099b4",
"0xcea301683072932fddd38c05965beb2027faec73185f65ed4151b41e03400122",
"0x24ac5c5f107913756c736793e2952552976e215e02b62b15ee6294cb5ec1dc1e"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

