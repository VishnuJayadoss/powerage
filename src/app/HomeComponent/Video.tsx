export default function Video() {
    return (
        <section className="w-full h-[60vh] overflow-hidden">
            <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
            >
                <source src="/home/powerage.mp4" type="video/mp4" />
            </video>
        </section>
    );
}
