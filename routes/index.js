var express = require('express');
var router = express.Router();
var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

web3.eth.getAccounts().then(console.log);

/* GET home page. */
router.get('/', function(req, res, next) {
  web3.eth.getAccounts().then(function(accounts){
    var account = accounts[0];
    web3.eth.getBalance(account).then(function(balance){
      var amount = web3.utils.fromWei(balance,'ether');
      res.render('index',{account:account,balance:amount});
    }).catch(()=>{});
  }).catch(()=>{});

});

module.exports = router;
