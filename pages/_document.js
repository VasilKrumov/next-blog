import Document, { Html, Head, Main, NextScript } from 'next/document'
class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta name="description" content="A site for my programming portfolio" />
                    <meta name="robots" content="noindex, nofollow" />
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                    <div id="notifications"></div>
                </body>
            </Html>
        )
    }
}

export default MyDocument
