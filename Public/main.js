    let version = "v.3.0.2";
    document.getElementsByClassName("version")[0].innerHTML =  "Romsai Bot " + version;
    let endpointJson = '{"u1": "https://chain.wax.io", "u2": "https://wax.eu.eosamsterdam.net", "u3": "https://wax.blokcrafters.io", "u4": "https://api.wax.alohaeos.com", "u5": "https://api.waxsweden.org", "u6": "https://wax.pink.gg", "u7": "https://wax.dapplica.io","u8": "https://wax.eosphere.io", "u9": "https://api.wax.greeneosio.com", "u10": "https://wax.cryptolions.io", "u11": "https://wax.eu.eosamsterdam.net", "u12": "https://api.wax.bountyblok.io"}';
    let objEndpoint = JSON.parse(endpointJson);
    let selectEndpoint;
    let getTheme = localStorage.getItem("theme");
    //คำนวณเวลา Date.now() จากปี 1970

    const minuteNow = 1000 * 60;
    const hourNow = minuteNow * 60;
    const dayNow = hourNow * 24;
    const yearNow = dayNow * 365;
    
    if(getTheme != null) {
      document.getElementsByTagName("body")[0].setAttribute("data-sa-theme", getTheme);
    }
    else {
      document.getElementsByTagName("body")[0].setAttribute("data-sa-theme", 1);
    }
   

    function modalLoad() {
      $('#modal-no-backdrop').modal('show');
      let chkoption = document.getElementById("url").length;     
      
      for(let i = 0; i<chkoption; i++){
        let u = "u"+ (i+1).toString(); 
          document.getElementById("url")[i].innerHTML = objEndpoint[u];
          document.getElementById("url")[i].value = objEndpoint[u];     
      }        
    }

    
    modalLoad();

    //tab 
    function tab(evt, idTab) {
      var i, tabcontent, tablinks;
      tabcontent = document.getElementsByClassName("tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
      }
      tablinks = document.getElementsByClassName("nav-link");
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
      }
      document.getElementById(idTab).style.display = "block";
      evt.currentTarget.className += " active";
    }
    document.getElementById("defaultOpen").click();
    //tab
   
  
    let callbackBtn = document.querySelector("#saveModal");
    let failBar = document.getElementById("fail_snackbar");
    let sucBar = document.getElementById("suc_snackbar");


    const { TaskTimer } = tasktimer;
  
    
  
    callbackBtn.addEventListener("click",async function() {
      selectEndpoint = document.getElementById("url").value;
      await console.log("select endpoint : " + selectEndpoint);  
      await login();             
    })

  
      
      const fwToolsColor = {"Wood": "Sienna", "Food": "DodgerBlue", "Gold": "Gold"};
      const fwMembersColor = {"Bronze Member": "Khaki", "Silver Member": "Silver", "Gold Member": "Yellow"};
      const nftPandaColor = {"earth": "Sienna", "water": "DodgerBlue", "fire": "Crimson", "wind": "MediumSeaGreen"};
      const nftPandaWeapon = {"0": "Common", "1": "Uncommon", "2": "Rare", 
                            "3": "Epic", "4": "Legendary", "5": "Mythic"};    

      let toolconf;
      let cropconf;
      let mbconf;
      let repairValue = 0;
      let refilValue = 0;
      let memwoodValue = 0;
      let memgoldValue = 0;
      let memfoodValue = 0;
      //
      let lineToken;
      let accountName;
      let meatStorage;
      let goldStorage;
      let repairStorage;
      let memwoodStorage;
      let memgoldStorage;
      let memfoodStorage;
      //
      let lineStorage;
      let repairToggleStorage;
      let refilToggleStorage;
      let memwoodToggleStorage;
      let memgoldToggleStorage;
      let memfoodToggleStorage;
      //
      let failStack = 0;
      let failToggle;
      let failstackStorage;
      let failToggleStorage;
      let failStackValue;
      
      let themeSelect;
      let themeStorage;

      async function repairToggle() {
        var toggle = await document.getElementById('repairToggle').checked;  
        if(toggle != true) {
        document.getElementById('repairInput').value = 0;
        document.getElementById('repairInput').disabled = true;
        document.getElementById('repairStatus').style.color = "red";
        document.getElementById('repairStatus').innerHTML = "ปิดการใช้งาน";
        }
        else {
          document.getElementById("repairInput").value = localStorage.getItem("gold");
          document.getElementById('repairInput').disabled = false;  
          document.getElementById('repairStatus').style.color = "green";
          document.getElementById('repairStatus').innerHTML = "เปิดการใช้งาน";
        }
      }

      async function refilToggle() {
        var toggle = await document.getElementById('refilToggle').checked;  
        if(toggle != true) {
        document.getElementById('refilInput').value = 0;
        document.getElementById('refilInput').disabled = true;
        document.getElementById('refilStatus').style.color = "red";
        document.getElementById('refilStatus').innerHTML = "ปิดการใช้งาน";
        }
        else {
          document.getElementById("refilInput").value = localStorage.getItem("meat");
          document.getElementById('refilInput').disabled = false;  
          document.getElementById('refilStatus').style.color = "green";
        document.getElementById('refilStatus').innerHTML = "เปิดการใช้งาน";
        }
      }

      async function memwoodToggle() {
        var toggle = await document.getElementById('memwoodToggle').checked;  
        if(toggle != true) {
        document.getElementById('memwoodInput').value = 0;
        document.getElementById('memwoodInput').disabled = true;
        document.getElementById('memwoodStatus').style.color = "red";
        document.getElementById('memwoodStatus').innerHTML = "ปิดการใช้งาน";
        }
        else {
          document.getElementById("memwoodInput").value = localStorage.getItem("memwood");
          document.getElementById('memwoodInput').disabled = false;  
          document.getElementById('memwoodStatus').style.color = "green";
        document.getElementById('memwoodStatus').innerHTML = "เปิดการใช้งาน";
        }
      }

      async function memgoldToggle() {
        var toggle = await document.getElementById('memgoldToggle').checked;  
        if(toggle != true) {
        document.getElementById('memgoldInput').value = 0;
        document.getElementById('memgoldInput').disabled = true;
        document.getElementById('memgoldStatus').style.color = "red";
        document.getElementById('memgoldStatus').innerHTML = "ปิดการใช้งาน";
        }
        else {
          document.getElementById("memgoldInput").value = localStorage.getItem("memgold");
          document.getElementById('memgoldInput').disabled = false;  
          document.getElementById('memgoldStatus').style.color = "green";
        document.getElementById('memgoldStatus').innerHTML = "เปิดการใช้งาน";
        }
      }

      async function memfoodToggle() {
        var toggle = await document.getElementById('memfoodToggle').checked;  
        if(toggle != true) {
        document.getElementById('memfoodInput').value = 0;
        document.getElementById('memfoodInput').disabled = true;
        document.getElementById('memfoodStatus').style.color = "red";
        document.getElementById('memfoodStatus').innerHTML = "ปิดการใช้งาน";
        }
        else {
          document.getElementById("memfoodInput").value = localStorage.getItem("memfood");
          document.getElementById('memfoodInput').disabled = false;  
          document.getElementById('memfoodStatus').style.color = "green";
        document.getElementById('memfoodStatus').innerHTML = "เปิดการใช้งาน";
        }
      }

      async function failStackToggle() {
        var toggle = await document.getElementById('stackToggle').checked;  
        if(toggle != true) {
        document.getElementById('randomEndpoint').value = 0;
        document.getElementById('randomEndpoint').disabled = true;
        document.getElementById('failStatus').style.color = "red";
        document.getElementById('failStatus').innerHTML = "ปิดการใช้งาน";
        }
        else {
          document.getElementById("randomEndpoint").value = localStorage.getItem("failStack");
          document.getElementById('randomEndpoint').disabled = false;  
          document.getElementById('failStatus').style.color = "green";
        document.getElementById('failStatus').innerHTML = "เปิดการใช้งาน";
        }
      }

      async function lineToggle() {
        var toggle = await document.getElementById('lineToggle').checked;  
        if(toggle != true) {
        document.getElementById('lineStatus').style.color = "red";
        document.getElementById('lineStatus').innerHTML = "ปิดการใช้งาน";
        }
        else {
        document.getElementById('lineStatus').style.color = "green";
        document.getElementById('lineStatus').innerHTML = "เปิดการใช้งาน";
        }
      }
  
  
      function refilSave() {
        var now = new Date(); 
        var dateTime = now.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
          repairValue = document.getElementById("repairInput").value;
          refilValue = document.getElementById("refilInput").value;
          memwoodValue = document.getElementById('memwoodInput').value;
          memgoldValue = document.getElementById('memgoldInput').value;
          memfoodValue = document.getElementById('memfoodInput').value;
          //
          repairToggleStorage = document.getElementById("repairToggle").checked;
          refilToggleStorage = document.getElementById("refilToggle").checked;
          memwoodToggleStorage = document.getElementById('memwoodToggle').checked;
          memgoldToggleStorage = document.getElementById('memgoldToggle').checked;  
          memfoodToggleStorage = document.getElementById('memfoodToggle').checked;  
          //
          localStorage.setItem("gold", repairValue);
          localStorage.setItem("meat", refilValue);
          localStorage.setItem("memwood", memwoodValue);
          localStorage.setItem("memgold", memgoldValue);
          localStorage.setItem("memfood", memfoodValue);
          //
          localStorage.setItem("repairToggle", repairToggleStorage);
          localStorage.setItem("refilToggle", refilToggleStorage);  
          localStorage.setItem("memwoodToggle", memwoodToggleStorage);
          localStorage.setItem("memgoldToggle", memgoldToggleStorage);
          localStorage.setItem("memfoodToggle", memfoodToggleStorage);
          //
          document.getElementById("setupLog").value += dateTime + ": ตั่งค่า Setup สำเร็จ \n" 
          sucBar.className = "show";
          sucBar.innerHTML = "Saved Setup !!!"
          setTimeout(function(){ sucBar.className = sucBar.className.replace("show", ""); }, 10000);
      }

      function failSave() {
        var now = new Date(); 
        var dateTime = now.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
        failStackValue = document.getElementById("randomEndpoint").value;
        failToggleStorage = document.getElementById("stackToggle").checked;
        localStorage.setItem("failStack", failStackValue);
        localStorage.setItem("failToggle", failToggleStorage);
        document.getElementById("setupLog").value += dateTime + ": ตั่งค่า Random Endpoint สำเร็จ \n";
        document.getElementById("setupLog").value += dateTime + ": Endpoint Random ทุกๆ : " + failStackValue + " Stack \n";
        sucBar.className = "show";
        sucBar.innerHTML = "Saved Setup !!!"
        setTimeout(function(){ sucBar.className = sucBar.className.replace("show", ""); }, 10000);
      }

      function lineSave() {
        var now = new Date(); 
        var dateTime = now.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
        lineStorage = document.getElementById("lineToggle").checked;
        localStorage.setItem("line", lineStorage);
        document.getElementById("setupLog").value += dateTime + ": ตั่งค่า การแจ้งเตือน Line สำเร็จ \n";
        sucBar.className = "show";
        sucBar.innerHTML = "Saved Setup !!!"
        setTimeout(function(){ sucBar.className = sucBar.className.replace("show", ""); }, 10000);
      }

      function themeSave() {
        var now = new Date(); 
        var dateTime = now.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
        themeStorage = document.querySelector('input[name="theme"]:checked').value;
        console.log(themeStorage);
        localStorage.setItem("theme", themeStorage);
        document.getElementById("setupLog").value += dateTime + ": ตั่งค่า Theme สำเร็จ \n";
        sucBar.className = "show";
        sucBar.innerHTML = "Saved Setup !!!"
        setTimeout(function(){ sucBar.className = sucBar.className.replace("show", ""); }, 10000);
      }

    function chkVer() {
      const config = {
        url: "/chkver",
        method: "POST",
      }
      axios(config)
      .then((res) => {
        if(res.data == version) {
          document.getElementById("setupLog").value += "Peerawat Ai: Bot เป็น Version ล่าสุดแล้ว\n";
        }
        else {
          document.getElementById("setupLog").value += "Peerawat Ai: มี Bot version " + res.data + " ใหม่กว่า version ที่คุณใช้\n";
          document.getElementById("setupLog").value += "Peerawat Ai: Link download https://github.com/godmoan/romsai.git";
          
        }
      })
      .catch((err) => {
        console.log(err);
      })
    }  

    let wax = new waxjs.WaxJS({
        rpcEndpoint: "https://chain.wax.io", //https://wax.pink.gg https://api.waxsweden.org https://wax.blokcrafters.io https://api.wax.alohaeos.com https://wax.eosphere.io https://wax.eu.eosamsterdam.net https://chain.wax.io
        tryAutoLogin: true,
        waxSigningURL: "https://all-access.wax.io",
        waxAutoSigningURL: "https://api-idm.wax.io/v1/accounts/auto-accept/"
    });

  
    async function login() {    
      try {
        wax.rpcEndpoint = selectEndpoint;
        await console.log("rpc endpoint : " +  wax.rpcEndpoint);  
        const userAccount = await wax.login();
        document.getElementsByClassName('user__name')[0].innerHTML = userAccount;
        document.getElementById('profileTitle').innerHTML = "Wax Wallet : " + userAccount;
        var now = new Date(); 
        var dateTime = now.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
              document.title = userAccount;
        accountName = userAccount;
  
        sucBar.className = "show";
        sucBar.innerHTML = "Login สำเร็จ !!!"
        chkVer();//check version
        failStack = 0;
        setTimeout(function(){ sucBar.className = sucBar.className.replace("show", ""); }, 10000);
  
        document.getElementById("txtArea").value += dateTime + ": Login id  " + userAccount +" สำเร็จ\n";   
        document.getElementById("txtArea").value += dateTime + ": ยินดีต้อนรับสู่ ร่มไทร Bot ถึงตัวจะนอน แต่ Bot ยังทำงาน\n";
              toolconf = await getTableAll("farmersworld", "toolconfs", 100);
              cropconf = await getTableAll("farmersworld", "cropconf", 100);
              mbconf = await getTableAll("farmersworld", "mbsconf", 100);
        await getUsage();
        document.getElementById("txtArea").value += dateTime + ": กำลังเชื่อมต่อ API กรุณารอสักครู่ .....\n";
        document.getElementById("txtArea").value += dateTime + ": Endpoint : " + wax.rpcEndpoint + "\n";
        await checkStorage();
      } catch(e) {       
        console.log(e.message);
        }   
      }

    async function checkStack() {
      if(failStack >= failStackValue && failToggleStorage == true ) {
        var urlRandom = Math.floor(Math.random() * 12) + 1;
        var urlString = "u" + urlRandom.toString();
        wax.rpcEndpoint = objEndpoint[urlString];
        await login();  
      }
    }
      
  
    async function checkStorage() {
      var now = new Date(); 
      var dateTime = now.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
      document.getElementById("endpointShow").innerHTML = "Endpoint : " + wax.rpcEndpoint;   
      if(localStorage.getItem("gold") == null || localStorage.getItem("repairToggle") == null || localStorage.getItem("repairToggle") == "false") {
        document.getElementById("setupLog").value += dateTime + ": ปิดการตั้งค่าซ่อมของ\n";
        document.getElementById("repairToggle").checked = false;
        document.getElementById('repairInput').disabled = true;
        document.getElementById('repairStatus').style.color = "red";
        document.getElementById('repairStatus').innerHTML = "ปิดการใช้งาน";
      }
      else {
        repairValue = localStorage.getItem("gold");
        document.getElementById("setupLog").value += dateTime + ": ตั้งค่าซ่อมของ : " + localStorage.getItem("gold") + " %\n";
        document.getElementById("repairInput").value = localStorage.getItem("gold");
        document.getElementById("repairToggle").checked = true
        document.getElementById('repairStatus').style.color = "green";
        document.getElementById('repairStatus').innerHTML = "เปิดการใช้งาน";
      }
      if(localStorage.getItem("meat") == null || localStorage.getItem("refilToggle") == null || localStorage.getItem("refilToggle") == "false") {
          document.getElementById("setupLog").value += dateTime + ": ปิดการตั้งค่าเติม Energy\n";
          document.getElementById("refilToggle").checked = false;
          document.getElementById('refilInput').disabled = true;
          document.getElementById('refilStatus').style.color = "red";
          document.getElementById('refilStatus').innerHTML = "ปิดการใช้งาน";
      }
      else {
        refilValue = localStorage.getItem("meat");
        document.getElementById("setupLog").value += dateTime + ": ตั้งค่าเติม Energy : " + localStorage.getItem("meat") + " %\n";
        document.getElementById("refilInput").value = localStorage.getItem("meat");
        document.getElementById("refilToggle").checked = true
        document.getElementById('refilStatus').style.color = "green";
        document.getElementById('refilStatus').innerHTML = "เปิดการใช้งาน";
      }
      if(localStorage.getItem("memwood") == null || localStorage.getItem("memwoodToggle") == null || localStorage.getItem("memwoodToggle") == "false") {
        document.getElementById("setupLog").value += dateTime + ": ปิดการตั้งค่า Store Mine ของ Wood\n";
        document.getElementById("memwoodToggle").checked = false;
        document.getElementById('memwoodInput').disabled = true;
        document.getElementById('memwoodStatus').style.color = "red";
        document.getElementById('memwoodStatus').innerHTML = "ปิดการใช้งาน";
      }
      else {
        repairValue = localStorage.getItem("memwood");
        document.getElementById("setupLog").value += dateTime + ": Store Mine Wood เปิดการใช้งาน\n";
        document.getElementById("memwoodInput").value = localStorage.getItem("memwood");
        document.getElementById("memwoodToggle").checked = true
        document.getElementById('memwoodStatus').style.color = "green";
        document.getElementById('memwoodStatus').innerHTML = "เปิดการใช้งาน";
      }

      if(localStorage.getItem("memgold") == null || localStorage.getItem("memgoldToggle") == null || localStorage.getItem("memgoldToggle") == "false") {
        document.getElementById("setupLog").value += dateTime + ": ปิดการตั้งค่า Store Mine ของ Gold\n";
        document.getElementById("memgoldToggle").checked = false;
        document.getElementById('memgoldInput').disabled = true;
        document.getElementById('memgoldStatus').style.color = "red";
        document.getElementById('memgoldStatus').innerHTML = "ปิดการใช้งาน";
      }
      else {
        repairValue = localStorage.getItem("memgold");
        document.getElementById("setupLog").value += dateTime + ": Store Mine Gold เปิดการใช้งาน";
        document.getElementById("memgoldInput").value = localStorage.getItem("memgold");
        document.getElementById("memgoldToggle").checked = true
        document.getElementById('memgoldStatus').style.color = "green";
        document.getElementById('memgoldStatus').innerHTML = "เปิดการใช้งาน";
      }

      if(localStorage.getItem("memfood") == null || localStorage.getItem("memfoodToggle") == null || localStorage.getItem("memfoodToggle") == "false") {
        document.getElementById("setupLog").value += dateTime + ": ปิดการตั้งค่า Store Mine ของ Food\n";
        document.getElementById("memfoodToggle").checked = false;
        document.getElementById('memfoodInput').disabled = true;
        document.getElementById('memfoodStatus').style.color = "red";
        document.getElementById('memfoodStatus').innerHTML = "ปิดการใช้งาน";
      }
      else {
        repairValue = localStorage.getItem("memfood");
        document.getElementById("setupLog").value += dateTime + ": Store Mine Food เปิดการใช้งาน";
        document.getElementById("memfoodInput").value = localStorage.getItem("memfood");
        document.getElementById("memfoodToggle").checked = true
        document.getElementById('memfoodStatus').style.color = "green";
        document.getElementById('memfoodStatus').innerHTML = "เปิดการใช้งาน";
      }

      if(localStorage.getItem("failStack") == null || localStorage.getItem("failToggle") == "false") {
        failToggleStorage = false;
        document.getElementById("setupLog").value += dateTime + ": ปิดการตั้งค่า Stack Random Endpoint \n";
        document.getElementById("stackToggle").checked = false;
        document.getElementById('randomEndpoint').disabled = true;
        document.getElementById('failStatus').style.color = "red";
        document.getElementById('failStatus').innerHTML = "ปิดการใช้งาน";
    }
      else {
        failStackValue = localStorage.getItem("failStack");
        failToggleStorage = true;
        document.getElementById("setupLog").value += dateTime + ": ตั้งค่า Stack Random Endpoint : " + localStorage.getItem("failStack") + " ครั้ง\n";
        document.getElementById("randomEndpoint").value = localStorage.getItem("failStack");
        document.getElementById("stackToggle").checked = true
        document.getElementById('failStatus').style.color = "green";
        document.getElementById('failStatus').innerHTML = "เปิดการใช้งาน";
      }

      if(localStorage.getItem("line") == null || localStorage.getItem("line") == "false") {
        document.getElementById("setupLoga").value += dateTime + ": ปิดการใช้งาน แจ้งเตือนไลน์\n";
        document.getElementById("lineToggle").checked = false;
        document.getElementById('lineStatus').style.color = "red";
        document.getElementById('lineStatus').innerHTML = "ปิดการใช้งาน";
      }
      else {
        lineStorage = localStorage.getItem("line");
        document.getElementById("setupLog").value += dateTime + ": เปิดการแจ้งเตือนไลน์ \n";
        document.getElementById("lineToggle").checked = true;
        document.getElementById('lineStatus').style.color = "green";
        document.getElementById('lineStatus').innerHTML = "เปิดการใช้งาน";
      }
  }


  
    async function getUsage(){
              var myHeaders = new Headers();
              myHeaders.append("Content-Type", "application/json");
  
              var raw = JSON.stringify({
                "account_name": accountName
              });
  
              var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
              };
  

              fetch(wax.rpcEndpoint + "/v1/chain/get_account", requestOptions)
              .then((response) => {
              return response.json();
              })
              .then((json) => {
                  let cpu = json.cpu_limit;  
                  var now = new Date(); 
                  var dateTime = now.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
                  document.getElementById("cpuShow").innerHTML = "CPU : " + ((cpu.used * 100) / cpu.max ).toFixed(2) + " %";
                  document.getElementById("waxcoinShow").innerHTML = "WAX : " + parseFloat(json.core_liquid_balance).toFixed(2) + " Coins";
              })
              .catch((error) => {
                  console.log(error.message);
              })
            
              var textarea = document.getElementById('txtArea');
              textarea.scrollTop = textarea.scrollHeight;
    }
    
  
  //////////////////////////////////GOTOFARMERSWORLD///////////////////////
    async function Farmersworld_main() {

      const balance = await getTableRows("farmersworld", "accounts", wax.userAccount);
      const fee = await getTableRows("farmersworld", "config", "");
      document.getElementById('feeShow').innerHTML = "Fee: " + fee.fee + "%";
      
      let balanceGold = 0;
      let balanceFood = 0;
      let balanceWood = 0;
      balance.balances.forEach(item => {
          if (item.includes("GOLD")) 
              balanceGold = item.split(" ")[0];
          else if(item.includes("FOOD"))
              balanceFood = item.split(" ")[0];
          else if(item.includes("WOOD"))
              balanceWood = item.split(" ")[0];
          }
      );
      
  /////////////////// FWG 
  //var url1 = "https://api.wax.alohaeos.com/v1/chain/get_currency_balance";
  var url1 = wax.rpcEndpoint + "/v1/chain/get_currency_balance";
  var xhr1 = new XMLHttpRequest();
  xhr1.open("POST", url1);
  xhr1.setRequestHeader("Content-Type", "application/json");
  xhr1.onreadystatechange = function () {
     if (xhr1.readyState === 4) {
        const obj1 = parseFloat(JSON.parse(xhr1.responseText));
        document.getElementById('fwwShow').innerHTML = "FWW Token : " + obj1.toFixed(4);
     }};
  var data1 = JSON.stringify({
      account: wax.userAccount,
      code: "farmerstoken",
      symbol: "FWW",
      limit: 1
  });
  xhr1.send(data1);
  /////////////////// FWW
  var url2 = wax.rpcEndpoint + "/v1/chain/get_currency_balance";
  var xhr2 = new XMLHttpRequest();
  xhr2.open("POST", url2);
  xhr2.setRequestHeader("Content-Type", "application/json");
  xhr2.onreadystatechange = function () {
     if (xhr2.readyState === 4) {
        const obj2 = parseFloat(JSON.parse(xhr2.responseText));
        document.getElementById('fwfShow').innerHTML = "FWF Token : " + obj2.toFixed(4);
     }};
  var data2 = JSON.stringify({
      account: wax.userAccount,
      code: "farmerstoken",
      symbol: "FWF",
      limit: 1
  });
  xhr2.send(data2);
  /////////////////// FWF
  var url3 = wax.rpcEndpoint + "/v1/chain/get_currency_balance";
  var xhr3 = new XMLHttpRequest();
  xhr3.open("POST", url3);
  xhr3.setRequestHeader("Content-Type", "application/json");
  xhr3.onreadystatechange = function () {
     if (xhr3.readyState === 4) {
        const obj3 = parseFloat(JSON.parse(xhr3.responseText));
        document.getElementById('fwgShow').innerHTML = "FWG Token : " + obj3.toFixed(4);
     }};
  var data3 = JSON.stringify({
      account: wax.userAccount,
      code: "farmerstoken",
      symbol: "FWG",
      limit: 1
  });
  xhr3.send(data3);
  /////////////////// FWF  
      document.getElementById("woodShow").innerHTML = "Wood : " + parseFloat(balanceWood).toFixed(4);
      document.getElementById("meatShow").innerHTML = "Meat : " + parseFloat(balanceFood).toFixed(4);
      document.getElementById("goldShow").innerHTML = "Gold : " + parseFloat(balanceGold).toFixed(4);
      
     let sInnerHTML = "";
      sInnerHTML += "<b><input type='button' onclick='re_energy(value)' class='btn btn-primary btn-sm' value='Energy: "+balance.energy+"/"+balance.max_energy+"'></b><br>";
      sInnerHTML += "<br>Tools<br>";
  
      document.getElementById("energyShow").innerHTML = "Energy : " + balance.energy  + "/" + balance.max_energy;    
      document.getElementsByClassName("toolShow")[0].innerHTML = await fwTools(balanceGold);
    
    
      
    let jsonfcoin = await fetch("https://wax.api.atomicassets.io/atomicassets/v1/assets?collection_name=farmersworld&schema_name=farmercoins&owner="+wax.userAccount+"&page=1&limit=1000&order=desc&sort=asset_id");
          let CoinsID = await jsonfcoin.json();
      document.getElementsByClassName("memShow")[0].innerHTML = await fwMembers();
      document.getElementById("coinmemShow").innerHTML = "Member Coins : " + Object.keys(CoinsID.data).length + " Coins";
  
      
      sInnerHTML += "<br>FarmPlot<br>";
      document.getElementsByClassName("plotShow")[0].innerHTML = await fwCrops();
  
      if (balance.energy <= (balance.max_energy * refilValue) / 100)
      {
        let recover = (balanceFood.split(".")[0]) * 5;
        
        if (recover == 0 && localStorage.getItem("line") == "true")
        {
          setTimeout(() => {
            $.ajax({
              type: "POST",
              url: "/submit",
              data: {
                    detail: `Id ${wax.userAccount} เนื้อเหลือแค่ 🐟\n ${balanceFood} เอง !!\n`+
                    `Energy เหลือ ${balance.energy}/${balance.max_energy}` +
                    `เติมเนื้อด้วย จ้า !!!`
                }
            });
            return;
          }, 60000);
          
        }
        
        if (recover < balance.max_energy){
        let config = {
                actions: [{
                  account: 'farmersworld',
                  name: 'recover',
                  authorization: [{
                    actor: wax.userAccount,
                    permission: 'active',
                  }],
                  data: {
                    owner: wax.userAccount,
                    energy_recovered: balance.max_energy - balance.energy
                  },
                }]
              };
          let ret = await sign(config);
          var now = new Date(); 
          var dateTime = now.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
          if (ret == true){
            document.getElementById("txtArea").value += dateTime + ": เติมเนื้อสำเร็จ !!! \n";
            sucBar.className = "show";
            sucBar.innerHTML = "เติมเนื้อ สำเร็จ !!!"
            setTimeout(function(){ sucBar.className = sucBar.className.replace("show", ""); }, 10000);
          }
          else{
            failBar.className = "show";
            failBar.innerHTML = "ล้มเหลว เติมเนื้อไม่สำเร็จ !!!";
            setTimeout(function(){ failBar.className = failBar.className.replace("show", ""); }, 10000);
            document.getElementById("txtArea").value += dateTime + ": ***ล้มเหลว*** เติมเนื้อไม่สำเร็จ  \n";
          }}
          
        if (recover >= balance.max_energy){
        recover = parseFloat(balance.max_energy - balance.energy);
        let config = {
                actions: [{
                  account: 'farmersworld',
                  name: 'recover',
                  authorization: [{
                    actor: wax.userAccount,
                    permission: 'active',
                  }],
                  data: {
                    owner: wax.userAccount,
                    energy_recovered: balance.max_energy - balance.energy
                  },
                }]
              };
          let ret = await sign(config);
          var now = new Date(); 
          var dateTime = now.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
          if (ret == true){ 
            document.getElementById("txtArea").value += dateTime + ": เติมเนื้อสำเร็จ !!! \n";
            sucBar.className = "show";
            sucBar.innerHTML = "เติมเนื้อ สำเร็จ !!!"
            setTimeout(function(){ sucBar.className = sucBar.className.replace("show", ""); }, 10000);
          }
          else{ 
            failBar.className = "show";
            failBar.innerHTML = "ล้มเหลว เติมเนื้อไม่สำเร็จ !!!";
            setTimeout(function(){ failBar.className = failBar.className.replace("show", ""); }, 10000);
            document.getElementById("txtArea").value += dateTime + ": ***ล้มเหลว*** เติมเนื้อไม่สำเร็จ  \n";
          }}
      }
    }
  
      async function fwMembers(){
      let sInnerHTML = "";
          const mbs = await getTableRows_byIndex("farmersworld", "mbs", wax.userAccount, '2', 'name');
          mbs.forEach(async element => {
              const mbName = mbconf.rows.find(elem => elem.template_id === element.template_id);
                     
        sInnerHTML += "<br><div class='d-inline-flex w-100'><div class='badge text-white' style='width: 130px; background-color: "+fwToolsColor[mbName.type]+";'>"+mbName.name+"</div>&emsp;&emsp;<div class='badge badge-secondary' style='width: 120px;'>"+sec2time(element.next_availability - Date.now()/1000)+"</div></div><br>";

        if (element.next_availability - Date.now()/1000 < 0){
          let config = {
                actions: [{
                  account: 'farmersworld',
                  name: 'mbsclaim',
                  authorization: [{
                    actor: wax.userAccount,
                    permission: 'active',
                  }],
                  data: {
                    owner: wax.userAccount,
                    asset_id: element.asset_id
                  },
                }]
              };
          let ret = await sign(config);
          if (ret == true){
            failStack = 0;
            var now = new Date(); 
            var dateTime = now.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
            sucBar.className = "show";
            sucBar.innerHTML = "Claim Member coins สำเร็จ !!!"
            setTimeout(function(){ sucBar.className = sucBar.className.replace("show", ""); }, 10000);
            document.getElementById("txtArea").value += dateTime + ": Claim Member coins สำเร็จ !!! \n";
            /*
            $.ajax({
                type: "POST",
                url: "/submit",
                data: {
                      detail: `${wax.userAccount} FW => Member Id ${element.asset_id},🪓 HARVEST SUCCESS!\n` 
                  }
              });*/
          }
          else{ 
            failStack ++;
            var now = new Date(); 
            var dateTime = now.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
            failBar.className = "show";
            failBar.innerHTML = "ล้มเหลว ไม่สามารถ Claim Member coins ได้ !!!";
            setTimeout(function(){ failBar.className = failBar.className.replace("show", ""); }, 3000);
            document.getElementById("txtArea").value += dateTime + ": ล้มเหลว ไม่สามารถ Claim Member coins ได้ !!! [Fail : " + failStack + "ครั้ง]\n";
          }
        }
      });
      return sInnerHTML;
    }
    
      async function fwCrops(){
      let sInnerHTML = "";
          const crops = await getTableRows_byIndex("farmersworld", "crops", wax.userAccount, '2', 'name');
          crops.forEach(async element => {
                const cropName = cropconf.rows.find(elem => elem.template_id === element.template_id);	
              sInnerHTML += "<br><div class='d-inline-flex w-100'><div class='badge bg-warning text-dark' style='width: 130px;'>"+cropName.name+"</div>&emsp;<div class='badge badge-secondary' style='width: 120px;'>"+element.times_claimed+"/42</div>&emsp;<div class='badge badge-secondary' style='width: 120px;'>"+sec2time(element.next_availability - Date.now()/1000)+"</div></div><br>";
  

              if (element.next_availability - Date.now()/1000 < 0){
                  let config = {
                        actions: [{
                          account: 'farmersworld',
                          name: 'cropclaim',
                          authorization: [{
                            actor: wax.userAccount,
                            permission: 'active',
                          }],
                          data: {
                            owner: wax.userAccount,
                            crop_id: element.asset_id
                          },
                        }]
                      };
                  let ret = await sign(config);
          var now = new Date(); 
          var dateTime = now.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
                  if (ret == true){
                      //console.log(`Id ${ element.asset_id}, HARVEST SUCCESS!`);
            document.getElementById("txtArea").value += dateTime + ": เก็บเกี่ยวผลผลิต สำเร็จ !!! \n";
                  }
                  else{
                      //console.log(`Id ${ element.asset_id}, HARVEST FAILED! ${ret}`);
            document.getElementById("txtArea").value += dateTime + ": ไม่สามารถเก็บเกี่ยวได้ !!! \n";
                  }
                }
        });
      return sInnerHTML;
    }
    
      async function fwTools(balanceGold){
      alcorPrice();
      coinmarketcapWax();
      getUsage();  
      let sInnerHTML = "";
          const tools = await getTableRows_byIndex("farmersworld", "tools", wax.userAccount, '2', 'name');
          tools.sort(function(a, b) {
        return a.template_id - b.template_id;
      });
      tools.forEach(async element => {
        const toolName = toolconf.rows.find(elem => elem.template_id === element.template_id);
        sInnerHTML += "<br><div class='d-inline-flex w-100'><div class='badge text-white' style='width: 130px; background-color: "+fwToolsColor[toolName.type]+";'>"+toolName.template_name+"</div>&emsp;<div class='btn btn-light' style='width: 120px;'>"+element.current_durability+"/"+element.durability+"</div>&emsp;<div class='btn btn-light' style='width: 120px;'>"+sec2time(element.next_availability - Date.now()/1000)+"</div>&emsp;</div><br>";            
     
        var storeMine;
        var multi;

        switch(toolName.type) {
          case "Wood": {
            if(localStorage.getItem("memwoodToggle") == "true") {
              storeMine = true;
              multi = localStorage.getItem("memwood");
            }
            else { storeMine = false; }
            break;
          }
          case "Gold": {
            if(localStorage.getItem("memgoldToggle") == "true") {
              storeMine = true;
              multi = parseInt(localStorage.getItem("memgold") + 2);            
            }
            else { storeMine = false;  }
            break;
          }
          case "Food": {
            if(localStorage.getItem("memfoodToggle") == "true") {
              storeMine = true;
              multi = localStorage.getItem("memfood");             
            }
            else { storeMine = false;  }
            break;
          }
        }

        //ไม่ store mine
          
          //if(storeMine == false) {
            if (element.next_availability - Date.now()/1000 < 0 && storeMine == false){
      
              let config = {
                    actions: [{
                      account: 'farmersworld',
                      name: 'claim',
                      authorization: [{
                        actor: wax.userAccount,
                        permission: 'active',
                      }],
                      data: {
                        owner: wax.userAccount,
                        asset_id: element.asset_id
                      },
                    }]
                  };
              let ret = await sign(config);
              
              var now = new Date(); 
              var dateTime = now.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
              if (ret == true){
                failStack = 0;
                sucBar.className = "show";
                sucBar.innerHTML = "Mine Success !!!"
                setTimeout(function(){ sucBar.className = sucBar.className.replace("show", ""); }, 10000);
                document.getElementById("txtArea").value += dateTime + ": Mine Success !!! \n";
              }
              else{ 
                failStack ++;
                failBar.className = "show";
                failBar.innerHTML = "ล้มเหลว ไม่สามารถ ขุด ได้ !!!";
                setTimeout(function(){ failBar.className = failBar.className.replace("show", ""); }, 3000);
                document.getElementById("txtArea").value += dateTime + ": ****ล้มเหลว**** ไม่สามารถ ขุดได้ !!! [Fail : " + failStack + "ครั้ง] \n";
              }
            }
        //}
        //ไม่ store mine


        //เช็ค store mine  
        //if ((element.next_availability + (hourNow * (multi * 2))) - Date.now()/1000 < 0){  
        if ((element.next_availability + ((hourNow * multi )/ 1000)) - Date.now()/1000 < 0){    
          let config = {
                actions: [{
                  account: 'farmersworld',
                  name: 'claim',
                  authorization: [{
                    actor: wax.userAccount,
                    permission: 'active',
                  }],
                  data: {
                    owner: wax.userAccount,
                    asset_id: element.asset_id
                  },
                }]
              };
          let ret = await sign(config);
          
          var now = new Date(); 
          var dateTime = now.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
          if (ret == true){
            failStack = 0;
            sucBar.className = "show";
            sucBar.innerHTML = "Mine Success !!!"
            setTimeout(function(){ sucBar.className = sucBar.className.replace("show", ""); }, 10000);
            document.getElementById("txtArea").value += dateTime + ": Mine Success !!! \n";
          }
          else{ 
            failStack ++;
            failBar.className = "show";
            failBar.innerHTML = "ล้มเหลว ไม่สามารถ ขุด ได้ !!!";
            setTimeout(function(){ failBar.className = failBar.className.replace("show", ""); }, 3000);
            document.getElementById("txtArea").value += dateTime + ": ****ล้มเหลว**** ไม่สามารถ ขุดได้ !!! [Fail : " + failStack + "ครั้ง] \n";
          }
        }//เช็ค store mine

        if (element.current_durability <= (element.durability * repairValue) / 100)
        {
          let goldNeed = (element.durability - element.current_durability) / 5;
          if ( goldNeed > balanceGold && localStorage.getItem("line") == "true")
          {
            setTimeout(() => {
              $.ajax({
                type: "POST",
                url: "/submit",
                data: {
                      detail: `${wax.userAccount} FW => Need more 🎟️\n ${balanceGold} remains!\n` +
                      `current_durability: ${element.current_durability}/${element.durability}` +
                      `แลกทองด้วย จ้า !!!`
                  }
              });                    
              return;
            }, 6000);
            
          } 
          
          let config = {
                actions: [{
                  account: 'farmersworld',
                  name: 'repair',
                  authorization: [{
                    actor: wax.userAccount,
                    permission: 'active',
                  }],
                  data: {
                    asset_owner: wax.userAccount,
                    asset_id: element.asset_id
                  },
                }]
              };
          let ret = await sign(config);
          var now = new Date(); 
          var dateTime = now.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
          if (ret == true){
            //console.log(`Id ${ element.asset_id}, REPAIR SUCCESS!`);
            sucBar.className = "show";
            sucBar.innerHTML = "Repair Success !!!"
            setTimeout(function(){ sucBar.className = sucBar.className.replace("show", ""); }, 10000);
            document.getElementById("txtArea").value += dateTime + ": Repair สำเร็จ !!! \n";
          }
          else{
            //console.log(`Id ${ element.asset_id}, REPAIR FAILED! ${ret}`);
            failBar.className = "show";
            failBar.innerHTML = "ล้มเหลว Repair ไม่สำเร็จ !!!";
            setTimeout(function(){ failBar.className = failBar.className.replace("show", ""); }, 3000);
            document.getElementById("txtArea").value += dateTime + ": ****ล้มเหลว**** Repair ไม่สำเร็จ !!! \n";
          }
        }
      });
      return sInnerHTML;
    }
    
    async function re_energy(value){
      if(localStorage.getItem("refilToggle") == true) {        
        recove = ((value.split(" ")[1]).split("/")[1])-((value.split(" ")[1]).split("/")[0]);
        let config = {
              actions: [{
              account: 'farmersworld',
              name: 'recover',
          authorization: [{
              actor: wax.userAccount,
              permission: 'active',
          }],
          data: {
              owner: wax.userAccount,
              energy_recovered: recove,
              },
              }]
          };
     
        
     
      let ret = await sign(config);
      if (ret == true){
          console.log(`RECOVERY ${recove} ENERGY DONE!`);
      }
      else { 
          console.log(`RECOVERY ENERGY FAILED`);
      }
      }
      
    }
    
    async function re_pair(value){
      if(localStorage.getItem("repairToggle") == true) {
        let config = {
              actions: [{
                  account: 'farmersworld',
                  name: 'repair',
              authorization: [{
                  actor: wax.userAccount,
                  permission: 'active',
          }],
          data: {
              asset_owner: wax.userAccount,
              asset_id: value,
              },
              }]
          };
      let ret = await sign(config);
      if (ret == true){
          console.log(`REPAIR TOOL ${value} DONE!`);
      }
      else { 
          console.log(`REPAIR TOOL ${value} FAILED`);
      }
      } 
    }
  
  
  async function coinmarketcapWax() {
    var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  await fetch("https://api.coingecko.com/api/v3/simple/price?ids=WAX&vs_currencies=THB", requestOptions)
  .then((response) => {
          return response.json();
      })
      .then((json) => {
          const waxprice = json.wax;     
          document.getElementsByClassName("waxprice")[0].innerHTML = "WAX/THB : " + waxprice.thb + " บาท";
      })
      .catch((error) => {
          console.log(error.message);
      })
  }
  
  
  
  
  async function alcorPrice() {
      var requestOptions = {
      method: 'GET',
      redirect: 'follow'
      };
  
      await fetch("https://wax.alcor.exchange/api/markets/104", requestOptions)
      .then((response) => {
          return response.json();
      })
      .then((json) => {
          const fwwprice = json.last_price;     
          document.getElementsByClassName("fwwprice")[0].innerHTML = "FWW/WAX : " + fwwprice.toFixed(3);
      })
      .catch((error) => {
          //console.log(error.message);
      })
  
      await fetch("https://wax.alcor.exchange/api/markets/105", requestOptions)
      .then((response) => {
          return response.json();
      })
      .then((json) => {
          const fwfprice = json.last_price;     
          document.getElementsByClassName("fwfprice")[0].innerHTML = "FWF/WAX : " + fwfprice.toFixed(3);
      })
      .catch((error) => {
          //console.log(error.message);
      })
  
      await fetch("https://wax.alcor.exchange/api/markets/106", requestOptions)
      .then((response) => {
          return response.json();
      })
      .then((json) => {
          const fwgprice = json.last_price;     
          document.getElementsByClassName("fwgprice")[0].innerHTML = "FWG/WAX : " + fwgprice.toFixed(3);
      })
      .catch((error) => {
          //console.log(error.message);
      })
   
  }
  
  
    
  /////////////////// SIGN
    async function sign(configTranscat) {
      if(!wax.api) {
        //return document.getElementById('response').innerHTML = '* Login first *';
        console.log("กรุณา Login Wax Wallet");
      }
     
      try {
        const result = await wax.api.transact(configTranscat, {
          blocksBehind: 1,
          expireSeconds: 60
        });
        
        await new Promise(resolve => setTimeout(resolve, 10000));
        return true;
        // await getCurrentMessage();
      } catch(e) {
        //document.getElementById('response').innerText = e.message;
        console.log(e.message);
        return e.message;
      }
    }
  
    async function getTableRows_byIndex(code, tableName, bound, index, key_type){
      if (typeof(code) != "string" || 
          typeof(bound) != "string" || 
          typeof(tableName) != "string" || 
          typeof(index) != "string" || 
          typeof(key_type) != "string") {
        return false;
      }
      let result;
      try {     
        result = await wax.api.rpc.get_table_rows({
          json: true,               // Get the response as json
          code: code,      // Contract that we target
          scope: code,         // Account that owns the data
          table: tableName,        // Table name
          index_position: index,
          key_type: key_type,
          lower_bound: bound,
          upper_bound: bound,
          reverse: false,           // Optional: Get reversed data
      });
      } catch(e) {     
        console.log("ERROR FOR: " + code + ", " + tableName + ", " + bound);
      }
      return result.rows;
    }
  
    async function getTableRows(code, tableName, bound, limit=1){
      if (typeof(code) != "string" || 
          typeof(bound) != "string" || 
          typeof(tableName) != "string") {
        return false;
      }
      let result;
      try {     
        result = await wax.api.rpc.get_table_rows({
          json: true,               // Get the response as json
          code: code,      // Contract that we target
          scope: code,         // Account that owns the data
          table: tableName,        // Table name
          lower_bound: bound,
          upper_bound: bound,
          limit: limit,                // Maximum number of rows that we want to get
          reverse: false,           // Optional: Get reversed data
          show_payer: false          // Optional: Show ram payer
      });
      } catch(e) {
        console.log("ERROR FOR: "+ e  + code + ", " + tableName + ", " + bound);
      }
      return result.rows[0];
    }
      
      async function getTableAll(code, tableName, limit=100){
          let result;
          try {      
            result = await wax.api.rpc.get_table_rows({
              json: true,               // Get the response as json
              code: code,      // Contract that we target
              scope: code,         // Account that owns the data
              table: tableName,        // Table name
              lower_bound: "",
              upper_bound: "",
              limit: limit,                // Maximum number of rows that we want to get
              reverse: false,           // Optional: Get reversed data
              show_payer: false          // Optional: Show ram payer
          });
          } catch(e) {
            console.log("ERROR FOR: " + code + ", " + tableName);
          }
          return result;
        }
    
  
  // --------------------------------------------Run at init---------------------------------------//
    // set a random value to the initial message value
    //document.getElementById('message').value = Math.random().toString(36).substring(2);
    //login(); // get onetime table
  
      const count = 10;
      const timerMain = new TaskTimer(1000);
    timerMain.add([
      {
        id: 'FarmersWorld',       // unique ID of the task
        // tickDelay: 1,       // 1 tick delay before first run
        tickInterval: 20,   // run every 10 ticks (10 x interval = 10000 ms)
        totalRuns: 0,       // run 2 times only. (set to 0 for unlimited times)
        callback(task) {
            // timerlogin.reset();
            //console.log(`${task.id} task has run ${task.currentRuns} times.`);
            Farmersworld_main();
            checkStack();
        }       
      }
   
    ]);
    timerMain.start()
  
    function sec2time(timeInSeconds) {
      var pad = function(num, size) { return ('000' + num).slice(size * -1); },
      time = parseFloat(timeInSeconds).toFixed(3),
      hours = Math.floor(time / 60 / 60),
      minutes = Math.floor(time / 60) % 60,
      seconds = Math.floor(time - minutes * 60),
      milliseconds = time.slice(-3);
      return pad(hours, 2) + ':' + pad(minutes, 2) + ':' + pad(seconds, 2);
      //return pad(hours, 2) + ':' + pad(minutes, 2) + ':' + pad(seconds, 2) + ',' + pad(milliseconds, 3);
    }
  
   
  