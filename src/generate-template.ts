const technologies = {
    JavaScript: '#fdcc4e',
    Css: '#36a1fe',
    Html: '#e47e80'
}

export default function generateTemplate(title: string, tech: string) {
    let techStyle = 'grey'
    
    if (tech === 'JavaScript') {
        techStyle = technologies.JavaScript
    }
    if (tech === 'Css') {
        techStyle = technologies.Css
    }
    if (tech === 'Html') {
        techStyle = technologies.Html
    }

    return `
<!DOCTYPE html>
<html lang="en">

<head>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            height: 100vh;
            width: 100vw;
            display: flex;
            gap: 40px;
            align-items: center;
            justify-content: center;
            background: #2A7B9B;
            background: linear-gradient(90deg, rgba(42, 123, 155, 1) 0%, rgba(87, 199, 133, 1) 50%, rgba(237, 221, 83, 1) 100%);
            font-family: monospace;
        }
        img {
            height: 400px;
            width: 400px;
        }
        div {
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 10px;
        }
        h1 {
            font-size: 5ch;
            max-width: 33ch;
        }
        h3 {
            font-size: 3.5ch;
            background-color: ${techStyle};
            width: fit-content;
            padding: 6px;
            border-radius: 99999px;
        }
    </style>
</head>

<body>
    <div>
        <h1>${title}</h1>
        <h3>${tech}</h3>
    </div>
    <img src="https://blog-sam.vercel.app/logo.png" alt="logo">
</body>

</html>
    `
}