require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom knife frame security iron response still grant hockey clinic orient slogan'; 
let testAccounts = [
"0x97bf27d48a7367eaccecda0e07b6d6a858405814483329896324224197bb053a",
"0x7d022339656fcfb5b92881949abcb6b55946794f394de8039bd9347c677fe034",
"0x64f92e10d0a930501035432781854bff981b8ce8db0d461c7123577f4e428b90",
"0xa91abac32f82c189f8f10637c5678021cb5716bf1f82084e60e3d665cc8b8503",
"0x12fe057b3279a62e8ff6ded288dc2ae01cb00cbf3f397231956091aa2c5cb272",
"0xc0993f4bea7273504e26a9b7fe73e7ec70ea7618016cf0ffb8de5e179bb7e8bf",
"0x538d8ee59a72d25c69a91fb02277fc33861cf45cb9c2428bca9a93773649ec23",
"0xbe591b574cee3e3354fb9ce2d80634e947c7631033a1c810afa3e2b08fa49d37",
"0x031afe18bbfa6157e2bfe09d1d82376835807f4ded199b49618fb77df22a79f0",
"0xc9dce13b3d39227e247ad1960eac3d635df8539178fd01cf0d0bf468c0e4ba12"
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

