var communitycurrencyContract = web3.eth.contract([{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"type":"function"},{"constant":true,"inputs":[],"name":"getBudget","outputs":[{"name":"_getGoalDemurrage","type":"uint256"},{"name":"_getGoalCrowdFunding","type":"uint256"},{"name":"_getGoalCommunityHours","type":"uint256"},{"name":"_getGoalExpenses","type":"uint256"},{"name":"_getcommitCrowdFunding","type":"uint256"},{"name":"_getCommitCommunityHours","type":"int256"},{"name":"_getCommitExpenses","type":"uint256"},{"name":"_getRealDemurrage","type":"uint256"},{"name":"_getRealCrowdFunding","type":"uint256"},{"name":"_getRealCommunityHours","type":"uint256"},{"name":"_getRealExpenses","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"_authorized","type":"address"}],"name":"accessMyWallet","outputs":[],"type":"function"},{"constant":true,"inputs":[{"name":"_monitored","type":"address"}],"name":"monitorWallet","outputs":[{"name":"_getCCUs","type":"int256"},{"name":"_getCredit","type":"uint256"},{"name":"_getDeadline","type":"uint256"},{"name":"_getMoneyLender","type":"address"},{"name":"_getUnitsOfTrust","type":"uint256"},{"name":"_getIsMember","type":"bool"},{"name":"_getAlias","type":"string"},{"name":"_getReputation","type":"uint256"},{"name":"_getLast","type":"uint256"},{"name":"_getGdpActivity","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"_beneficiary","type":"address"},{"name":"_createReputation","type":"uint256"}],"name":"mintAssignReputation","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_createCCUs","type":"int256"}],"name":"mintCCUs","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_newCommunity","type":"address"}],"name":"newCommunity","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_NewGoalDemurrage","type":"uint256"},{"name":"_newGoalCrowdFunding","type":"uint256"},{"name":"_newGoalCommunityHours","type":"uint256"},{"name":"_newGoalExpenses","type":"uint256"}],"name":"setNewBudget","outputs":[],"type":"function"},{"constant":false,"inputs":[],"name":"creditUpdate","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_commitF","type":"uint256"}],"name":"commitFunding","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_newMember","type":"address"},{"name":"_newAlias","type":"string"}],"name":"acceptMember","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"baseUnits","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"type":"function"},{"constant":false,"inputs":[{"name":"_newTreasury","type":"address"}],"name":"newTreasury","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"getParameters","outputs":[{"name":"_getTreasury","type":"address"},{"name":"_getCommunity","type":"address"},{"name":"_getDemurrage","type":"int256"},{"name":"_getRewardRate","type":"uint256"},{"name":"_getIniMemberCCUs","type":"int256"},{"name":"_getIniMemberReputation","type":"uint256"},{"name":"_getExchange","type":"uint256"},{"name":"getName","type":"string"},{"name":"getSymbol","type":"string"},{"name":"getCommunityName","type":"string"},{"name":"getBaseUnits","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"getMoneyTotals","outputs":[{"name":"_getTotalMinted","type":"int256"},{"name":"_getTotalCredit","type":"uint256"},{"name":"_getTotalTrustCost","type":"uint256"},{"name":"_getTotalTrustAvailable","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"_payee","type":"address"},{"name":"_payment","type":"uint256"}],"name":"transfer","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_newDemurrage","type":"int256"},{"name":"_newrewardRate","type":"uint256"},{"name":"_newIniCCUs","type":"int256"},{"name":"_newIniR","type":"uint256"}],"name":"newParameters","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"communityName","outputs":[{"name":"","type":"string"}],"type":"function"},{"constant":false,"inputs":[{"name":"_payH","type":"int256"}],"name":"payHours","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_oldMember","type":"address"}],"name":"kickOutMember","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_borrower","type":"address"},{"name":"_credit","type":"uint256"},{"name":"_daysAfter","type":"uint256"}],"name":"credit","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_commitH","type":"int256"}],"name":"commitHours","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_payF","type":"uint256"}],"name":"payFunding","outputs":[],"type":"function"},{"inputs":[],"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_amount","type":"uint256"},{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_timeStampT","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_creditCCUs","type":"uint256"},{"indexed":false,"name":"_creditDays","type":"uint256"},{"indexed":false,"name":"_endorsedUoT","type":"uint256"},{"indexed":true,"name":"_endorsedAddress","type":"address"},{"indexed":false,"name":"_myReputationBalance","type":"uint256"},{"indexed":false,"name":"_timeStampC","type":"uint256"}],"name":"Credit","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_nMember","type":"address"},{"indexed":false,"name":"_nAlias","type":"string"},{"indexed":false,"name":"_timeStampNM","type":"uint256"}],"name":"newMember","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_exMember","type":"address"},{"indexed":false,"name":"_exAlias","type":"string"},{"indexed":false,"name":"_timeStampExM","type":"uint256"}],"name":"exMember","type":"event"}]);

var communitycurrency = communitycurrencyContract.new(
   {
     from: web3.eth.accounts[0], 
     data: '60606040525b33600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff0219169083021790555033600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff02191690830217905550600360066000508190555060146007600050819055506109c46008600050819055506130d4600960005081905550600a600a60005081905550604060405190810160405280600481526020017f484f55520000000000000000000000000000000000000000000000000000000081526020015060006000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061011c57805160ff191683800117855561014d565b8280016001018555821561014d579182015b8281111561014c57825182600050559160200191906001019061012e565b5b509050610178919061015a565b80821115610174576000818150600090555060010161015a565b5090565b5050604060405190810160405280600281526020017f485200000000000000000000000000000000000000000000000000000000000081526020015060016000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061020257805160ff1916838001178555610233565b82800160010185558215610233579182015b82811115610232578251826000505591602001919060010190610214565b5b50905061025e9190610240565b8082111561025a5760008181506000905550600101610240565b5090565b5050604060405190810160405280600981526020017f44455350455241444f000000000000000000000000000000000000000000000081526020015060026000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106102e857805160ff1916838001178555610319565b82800160010185558215610319579182015b828111156103185782518260005055916020019190600101906102fa565b5b5090506103449190610326565b808211156103405760008181506000905550600101610326565b5090565b505060646003600050819055506000600b600050819055506000600c600050819055506000600d600050819055506000600e600050819055506000600f6000508190555060006010600050819055506000601160005081905550600060126000508190555060006013600050819055506000601460005081905550600060156000508190555060006016600050819055506000601760005081905550600060186000508190555060006019600050819055505b612d9a806104056000396000f36060604052361561013a576000357c01000000000000000000000000000000000000000000000000000000009004806306fdde031461013c578063127714c7146101b75780631b9f9647146102205780631bad1d2e146102385780631cfd82d5146103115780634be85ed514610332578063650936611461034a57806369c4113d1461036257806370ab8ba81461039557806377bb75ca146103a45780637817a60f146103bc5780638a80302e1461041b57806395d89b411461043e5780639718b524146104b9578063a5ea11da146104d1578063a5ebf3891461066e578063a9059cbb146106a6578063ac4b2bae146106c7578063c6d572ae146106fa578063cc44442f14610775578063d9e947f31461078d578063ddb1bdc8146107a5578063e555569a146107cf578063ea5ea470146107e75761013a565b005b61014960048050506107ff565b60405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f1680156101a95780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101c460048050506119a3565b604051808c81526020018b81526020018a81526020018981526020018881526020018781526020018681526020018581526020018481526020018381526020018281526020019b50505050505050505050505060405180910390f35b6102366004808035906020019091905050612c73565b005b61024e600480803590602001909190505061263b565b604051808b81526020018a81526020018981526020018873ffffffffffffffffffffffffffffffffffffffff168152602001878152602001868152602001806020018581526020018481526020018381526020018281038252868181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f1680156102fa5780820380516001836020036101000a031916815260200191505b509b50505050505050505050505060405180910390f35b61033060048080359060200190919080359060200190919050506118b2565b005b61034860048080359060200190919050506117dc565b005b61036060048080359060200190919050506116c6565b005b6103936004808035906020019091908035906020019091908035906020019091908035906020019091905050611a35565b005b6103a26004805050611a90565b005b6103ba6004808035906020019091905050612bc3565b005b6104196004808035906020019091908035906020019082018035906020019191908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509090919050506109eb565b005b61042860048050506109e2565b6040518082815260200191505060405180910390f35b61044b60048050506108a0565b60405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f1680156104ab5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6104cf6004808035906020019091905050611751565b005b6104de600480505061133a565b604051808c73ffffffffffffffffffffffffffffffffffffffff1681526020018b73ffffffffffffffffffffffffffffffffffffffff1681526020018a81526020018981526020018881526020018781526020018681526020018060200180602001806020018581526020018481038452888181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f1680156105a25780820380516001836020036101000a031916815260200191505b508481038352878181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f1680156105fb5780820380516001836020036101000a031916815260200191505b508481038252868181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f1680156106545780820380516001836020036101000a031916815260200191505b509e50505050505050505050505050505060405180910390f35b61067b6004805050611604565b6040518085815260200184815260200183815260200182815260200194505050505060405180910390f35b6106c56004808035906020019091908035906020019091905050611f81565b005b6106f8600480803590602001909190803590602001909190803590602001909190803590602001909190505061163b565b005b6107076004805050610941565b60405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f1680156107675780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61078b6004808035906020019091905050612a87565b005b6107a36004808035906020019091905050610dbe565b005b6107cd60048080359060200190919080359060200190919080359060200190919050506122a8565b005b6107e56004808035906020019091905050612c1b565b005b6107fd6004808035906020019091905050612d16565b005b60006000508054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156108985780601f1061086d57610100808354040283529160200191610898565b820191906000526020600020905b81548152906001019060200180831161087b57829003601f168201915b505050505081565b60016000508054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156109395780601f1061090e57610100808354040283529160200191610939565b820191906000526020600020905b81548152906001019060200180831161091c57829003601f168201915b505050505081565b60026000508054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156109da5780601f106109af576101008083540402835291602001916109da565b820191906000526020600020905b8154815290600101906020018083116109bd57829003601f168201915b505050505081565b60036000505481565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610a4757610dba565b6001601a60005060008473ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060050160006101000a81548160ff0219169083021790555080601a60005060008473ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000506006016000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610b0f57805160ff1916838001178555610b40565b82800160010185558215610b40579182015b82811115610b3f578251826000505591602001919060010190610b21565b5b509050610b6b9190610b4d565b80821115610b675760008181506000905550600101610b4d565b5090565b5050600860005054601a60005060008473ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060000160005081905550600960005054601a60005060008473ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000506007016000508190555042601a60005060008473ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050600801600050819055506000601a60005060008473ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050600901600050819055506000601a60005060008473ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050600a01600050819055506000601a60005060008473ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050600b0160005081905550600860005054601660008282825054019250508190555060096000505460196000828282505401925050819055507f5023dcc2143337035da9059c0bf4bfc61013389c278dbe97201d011befcee551828242604051808473ffffffffffffffffffffffffffffffffffffffff168152602001806020018381526020018281038252848181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f168015610daa5780820380516001836020036101000a031916815260200191505b5094505050505060405180910390a15b5050565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610e1a57611337565b6000601a60005060008373ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060050160006101000a81548160ff02191690830217905550601a60005060008273ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060010160005054601760005081905550601a60005060008273ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060040160005054601a6000506000601a60005060008573ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050600701600082828250540192505081905550601a60005060008273ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050600701600050546019600082828250540392505081905550601a60005060008273ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050600401600050546019600082828250540192505081905550601a60005060008273ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050600b0160005054600f600082828250540392505081905550601a60005060008273ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050600a016000505460106000828282505403925050819055506000601a60005060008373ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050600701600050819055506000601a60005060008373ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050600101600050819055506000601a60005060008373ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000506002016000508190555042601a60005060008373ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050600801600050819055506000601a60005060008373ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050600901600050819055506000601a60005060008373ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050600a01600050819055506000601a60005060008373ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050600b01600050819055507f431cc348b90b088ed3865de3ec3c1fd80dc4fef4f4ac4bbfe55fd7a40c6d9fcd81601a60005060008473ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060060160005042604051808473ffffffffffffffffffffffffffffffffffffffff168152602001806020018381526020018281038252848181546001816001161561010002031660029004815260200191508054600181600116156101000203166002900480156113265780601f106112fb57610100808354040283529160200191611326565b820191906000526020600020905b81548152906001019060200180831161130957829003601f168201915b505094505050505060405180910390a15b50565b60006000600060006000600060006020604051908101604052806000815260200150602060405190810160405280600081526020015060206040519081016040528060008152602001506000600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169a508a50600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169950895060066000505498508850600760005054975087506008600050549650865060096000505495508550600a600050549450845060006000508054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561149f5780601f106114745761010080835404028352916020019161149f565b820191906000526020600020905b81548152906001019060200180831161148257829003601f168201915b50505050509350835060016000508054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156115415780601f1061151657610100808354040283529160200191611541565b820191906000526020600020905b81548152906001019060200180831161152457829003601f168201915b50505050509250825060026000508054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156115e35780601f106115b8576101008083540402835291602001916115e3565b820191906000526020600020905b8154815290600101906020018083116115c657829003601f168201915b505050505091508150600360005054905080505b909192939495969798999a565b6000600060006000601660005054935083506017600050549250825060186000505491508150601960005054905080505b90919293565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515611697576116c0565b836006600050819055508260076000508190555081600860005081905550806009600050819055505b50505050565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156117225761174e565b80600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908302179055505b50565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156117ad576117d9565b80600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908302179055505b50565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515611838576118af565b80601a6000506000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000506000016000828282505401925050819055508060166000828282505401925050819055505b50565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561190e5761199f565b6001601a60005060008473ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060050160009054906101000a900460ff1614151561195c5761199f565b80601a60005060008473ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000506007016000828282505401925050819055505b5050565b60006000600060006000600060006000600060006000600b600050549a508a50600c6000505499508950600d6000505498508850600e6000505497508750600f60005054965086506010600050549550855060116000505494508450601260005054935083506013600050549250825060146000505491508150601560005054905080505b909192939495969798999a565b83600b6000508190555082600c6000508190555081600d6000508190555080600e6000508190555060006012600050819055506000601360005081905550600060146000508190555060006015600050819055505b50505050565b6000601a60005060003373ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050600101600050541115611f7e57601a60005060003373ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000506002016000505442101515611f7d576000601a60005060003373ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060020160005081905550601a60005060003373ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000506001016000505460176000828282505403925050819055506000601a60005060003373ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050600101600050819055506000601a60005060003373ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050600001600050541215611d7757601a60005060003373ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000506004016000505460186000828282505403925050819055506064600760005054601a60005060003373ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060040160005054020460196000828282505403925050819055506064600760005054601a60005060003373ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050600401600050540204601a6000506000601a60005060003373ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050600701600082828250540392505081905550611ee6565b601a60005060003373ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000506004016000505460186000828282505403925050819055506064600760005054601a60005060003373ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060040160005054020460196000828282505401925050819055506064600760005054606401601a60005060003373ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050600401600050540204601a6000506000601a60005060003373ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000506007016000828282505401925050819055505b33601a60005060003373ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060030160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908302179055506000601a60005060003373ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050600401600050819055505b5b5b565b600060006000611f8f611a90565b601a60005060003373ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060010160005054925082601a60005060003373ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060000160005054019150839050808213156122a05780601a60005060003373ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060000160008282825054039250508190555080601a60005060008773ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000506000016000828282505401925050819055506064600660005054820205601a60005060008773ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000506000016000828282505403925050819055506064600660005054820205601a6000506000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000506000016000828282505401925050819055508473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167ff2dbd98d79f00f7aff338b824931d607bfcc63d47307162470f25a055102d3b08642604051808381526020018281526020019250505060405180910390a34284601a60005060003373ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060080160005054601a60005060003373ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060090160005054020104601a60005060003373ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060090160005081905550426103e802601a60005060003373ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050600801600050819055505b5b5050505050565b60006001601a60005060003373ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060050160009054906101000a900460ff161415156122f857612635565b6001601a60005060008673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060050160009054906101000a900460ff1614151561234657612635565b6000601a60005060008673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060010160005054111561238957612635565b818302905080601a60005060003373ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000506007016000505411156126345780601a60005060003373ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060070160008282825054039250508190555082601a60005060008673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060010160008282825054019250508190555033601a60005060008673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060030160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908302179055506201518082024201601a60005060008673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000506002016000508190555080601a60005060008673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050600401600050819055508373ffffffffffffffffffffffffffffffffffffffff167feabe537887af8ee47247bd5a7bb3bd5980e9a01abe84e8cbf0caf34570eb0b3d8484601a60005060008973ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060040160005054601a60005060003373ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000506007016000505442604051808681526020018581526020018481526020018381526020018281526020019550505050505060405180910390a28260176000828282505401925050819055508060186000828282505401925050819055508060196000828282505403925050819055505b5b50505050565b60006000600060006000600060206040519081016040528060008152602001506000600060003373ffffffffffffffffffffffffffffffffffffffff168b73ffffffffffffffffffffffffffffffffffffffff1614806126e85750600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b806127705750601a60005060008c73ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b15612a7957601a60005060008c73ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000506000016000505499508950601a60005060008c73ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000506001016000505498508850601a60005060008c73ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000506002016000505497508750601a60005060008c73ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1696508650601a60005060008c73ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000506004016000505495508550601a60005060008c73ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060050160009054906101000a900460ff1694508450601a60005060008c73ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000506006016000508054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156129c15780601f10612996576101008083540402835291602001916129c1565b820191906000526020600020905b8154815290600101906020018083116129a457829003601f168201915b505050505093508350601a60005060008c73ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000506007016000505492508250601a60005060008c73ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000506008016000505491508150601a60005060008c73ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060090160005054905080505b5b9193959799509193959799565b80601a60005060003373ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050600a01600050541315612bbf5780601a60005060003373ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050600a0160008282825054039250508190555080601060008282825054039250508190555080601a6000506000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060000160008282825054039250508190555080601a60005060003373ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000506000016000828282505401925050819055505b5b50565b80601a60005060003373ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050600b0160008282825054019250508190555080600f6000828282505401925050819055505b50565b80601a60005060003373ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050600a016000828282505401925050819055508060106000828282505401925050819055505b50565b6000601a60005060003373ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060010160005054141515612cb757612d13565b80601a60005060003373ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060030160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908302179055505b50565b80601a60005060003373ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050600b0160008282825054039250508190555080600f600082828250540392505081905550612d96600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1682611f81565b5b5056', 
     gas: 3000000
   }, function(e, contract){
    console.log(e, contract);
    if (typeof contract.address != 'undefined') {
         console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
    }
 })
 
var communityCurrency = communitycurrencyContract.at('f025d81196b72fba60a1d4dddad12eeb8360d828');

var coinbase = web3.eth.coinbase;

communityCurrency.creditUpdate();

var myWallet = communityCurrency.monitorWallet(coinbase);
var myCommunityCUnits = myWallet[0];
var myCredit = myWallet[1];
var myDeadline = myWallet[2];
var myMoneyLender = myWallet[3];
var myUnitsOfTrust = myWallet[4];
var myIsMember = myWallet[5];
var myAlias = myWallet[6];
var myReputation = myWallet[7];
var myLast = myWallet[8];
var myGdpActivity = myWallet[9];
var myCommittedH = myWallet[10];
var myCommittedF = myWallet[11];

var contractParameters = communityCurrency.getParameters();
var treasury = contractParameters[0];
var commune = contractParameters[1];
var demurrage = contractParameters[2];
var rewardRate = contractParameters[3];
var iniMemberCCUs = contractParameters[4];
var iniMemberReputation = contractParameters[5];
var exchangeRate = contractParameters[6];
var name = contractParameters[7];
var symbol = contractParameters[8];
var communityName = contractParameters[9];
var baseUnits = contractParameters[10];

var budget = communityCurrency.getBudget();
var goalDemurrage = budget[0];
var goalCrowdFundig = budget[1];
var goalCommunityHours = budget[2];
var goalExpenses = budget[3];
var committedCrowdFundig = budget[4];
var committedCommunityHours = budget[5];
var committedExpenses = budget[6];
var realDemurrage = budget[7];
var realCrowdFundig = budget[8];
var realCommunityHours = budget[9];
var realExpenses = budget[10];


if (myIsMember = true) {
	var commoner ="Commoner of " +  communityName + " Community";
} else { 
    var commoner ="Not Commoner";
};

var dateMyLast = new Date(myLast * 1000);
var dateMyDealine = new Date(myDeadline * 1000);

