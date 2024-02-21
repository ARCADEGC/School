import { Html, Head, Main } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link
                    href="https://api.fontshare.com/v2/css?f[]=satoshi@1,900,700,500,301,701,300,501,401,901,400,2&display=swap"
                    rel="stylesheet"></link>
            </Head>
            <body className="grid grid-cols-[[page-start_breakout-left-start]_minmax(var(--inline-padding),_1fr)_[content-start_breakout-right-start]_min(100%_-_var(--inline-padding)_*_2,_1400px)_[content-end_breakout-left-end]_minmax(var(--inline-padding),_1fr)_[page-end_breakout-right-end]] font-serif [--inline-padding:_1rem]">
                <Main />
            </body>
        </Html>
    );
}
