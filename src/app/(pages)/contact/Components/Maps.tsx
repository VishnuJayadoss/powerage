export default function Maps() {
    return (
        <section className="">
            <div className="shadow-lg w-full h-[450px] overflow-hidden">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d195508.52532326698!2d77.050303!3d10.986127000000002!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba857f891cad8f3%3A0x88445aefac13eb3a!2sPoweRage!5e1!3m2!1sen!2sin!4v1745565200667!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="border-0 w-full h-full"
                ></iframe>
            </div>
        </section>
    );
}
