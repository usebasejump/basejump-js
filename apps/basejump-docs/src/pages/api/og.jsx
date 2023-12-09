import { ImageResponse } from "@vercel/og";

export const config = {
    runtime: "experimental-edge",
};

export default function (req) {
    try {
        const { searchParams } = new URL(req.url);

        const hasTitle = searchParams.has("title");
        const title = hasTitle
            ? searchParams.get("title")?.slice(0, 100)
            : "Basejump";
        return new ImageResponse(
            (
                <div
                    style={{
                        fontSize: 80,
                        color: "white",
                        fontWeight: "bolder",
                        background:
                            "linear-gradient(117deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 100%)",
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        padding: 60,
                        flexDirection: "column",
                        justifyContent: hasTitle ? "space-between" : "center",
                        alignItems: "center",
                    }}
                >
                    {hasTitle && (
                        <div
                            style={{
                                fontWeight: "bolder",
                            }}
                        >
                            {title}
                        </div>
                    )}
                    <div
                        style={{
                            width: "100%",
                            display: "flex",
                            fontWeight: 800,
                            justifyContent: hasTitle ? "flex-end" : "center",
                            alignItems: "center",
                            alignContent: hasTitle ? "flex-end" : "center",
                        }}
                    >
                        <img
                            width="150"
                            height="150"
                            src={`https://usebasejump.com/images/basejump-logo.png`}
                            style={{
                                borderRadius: 128,
                                marginRight: "1rem",
                            }}
                        />
                        Basejump
                    </div>
                </div>
            ),
            {
                width: 1200,
                height: 600,
            }
        );
    } catch (e) {
        console.log(`${e.message}`);
        return new Response(`Failed to generate an image`, {
            status: 500,
        });
    }
}
