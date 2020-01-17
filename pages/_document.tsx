import Document, { Head, Main, NextScript } from 'next/document'
export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <html>
                <Head>
                    <link rel="icon" href="/favicon.ico" />
                    <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1"></meta>
                    <link href="../static/style/reset.css" rel="stylesheet" />
                    <link href="https://cdn.bootcss.com/animate.css/3.7.2/animate.min.css" rel="stylesheet" />
                    <link href="http://at.alicdn.com/t/font_1596016_zh57daamf7b.css" rel="stylesheet"></link>
                    <style>{`body { margin: 0 } /* custom! */`}</style>
                </Head>
                <body className="custom_class">
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}