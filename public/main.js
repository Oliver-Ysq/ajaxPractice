getCSS.onclick = () => {
    const req = new XMLHttpRequest();
    req.open('GET', '/style.css')
    req.onreadystatechange = () => {
        if (req.readyState == 4 && req.status == 200) {
            //创建style标签
            const style = document.createElement('style')
            //填写style内容
            style.innerHTML = req.response
            //插到<head></head>
            document.head.appendChild(style)
        }
    }
    req.send()
}

getJS.onclick = () => {
    const req = new XMLHttpRequest();
    req.open('GET', '/2.js')
    req.onreadystatechange = () => {
        if (req.readyState == 4 && req.status == 200) {
            //创建script标签
            const script = document.createElement('script')
            //填写script内容
            script.innerHTML = req.response
            //插到<body></body>
            document.body.appendChild(script)
        }
    }
    req.send()
}

getHTML.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', "/3.html")
    request.onreadystatechange = () => {
        if (request.readyState == 4 && request.status == 200) {
            //创建div标签
            const div = document.createElement('div')
            //填写div内容
            div.innerHTML = request.response
            //插到<body></body>
            document.body.appendChild(div)
        }
    }
    request.send()
}

getXML.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', "/4.xml")
    request.onreadystatechange = () => {
        if (request.readyState == 4 && request.status == 200) {
            //创建dom对象
            const dom = request.responseXML;
            //获取dom对象的内容
            const text = dom.getElementsByTagName('warning')[0].textContent.trim()
            //插到<body></body>
            console.log(text)
        }
    }
    request.send()
}

getJSON.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '/5.json')
    request.onreadystatechange = () => {
        if (request.readyState == 4 && request.status == 200) {
            const obj = JSON.parse(request.response)
            console.log(obj)
        }
    }
    request.send()
}