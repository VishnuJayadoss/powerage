import Link from "next/link";

export default function ReturnDetail() {
    return (
        <>
            <section className="px-30 py-6">
                <h2 className="pb-4 font-semibold text-[30px] text-center">Refund policy</h2>

                <p className="pb-4"><strong>Warranty Policy</strong></p>
                <p className="pb-6 text-gray-600">All PoweRage exhaust systems are warranted against defects in material and workmanship for Lifetime of its use. This warranty does not cover discoloration of finishes. This warranty is limited to the repair or replacement of a product proven to be defective from normal use. PoweRage exhaust systems are designed to fit on OEM motor and chassis. This warranty does not cover any product subject to abuse, misuse, improper installation and modification. We give Lifetime warranty on rust.</p>

                <p className="pb-4"><strong>THE PROCESS</strong></p>

                <p className="pb-6 text-gray-600">1) Email at support@powerageperformance.com   with a detailed explanation of the issue and supporting images.</p>

                <p className="pb-6 text-gray-600">2) The company will review the information and determine if the issue is covered under warranty.</p>

                <p className="pb-6 text-gray-600">3) If the issue is serviceable, we will service it and if its not, we will replace the product.</p>

                <p className="pb-6 text-gray-600">4) The customer will receive confirmation on their warranty claim.</p>

                <p className="pb-4"><strong>Returns & Exchange Policy</strong></p>

                <p className="pb-4"><strong>RETURN POLICY</strong></p>
                <p className="pb-6 text-gray-600">Our return policy allows you to return items purchased from us within 7 days of delivery. If you wish to return product(s) to us, please follow the below process</p>

                <p className="pb-6 text-gray-600">. Email <Link href="mailto: support@powerageperformance.com"> support@powerageperformance.com</Link>  about the product return and wait for confirmation from us.</p>

                <p className="pb-6 text-gray-600">· Return the product to the address provided by us once you have received the confirmation email.</p>

                <p className="pb-6 text-gray-600">· Customer is responsible for return shipping cost. Please note that we are not responsible for any damage, delays, or loss of your product during transit to our warehouse.</p>

                <p className="pb-6 text-gray-600">· Returned item(s) must be in new condition, with bill and not damaged in any way.</p>

                <p className="pb-6 text-gray-600">· Before processing a refund or replacement, we will thoroughly inspect the returned item for quality assurance.</p>

                <p className="pb-6 text-gray-600">· Returns for damage due to negligence, improper usage, or application are not covered.</p>

                <p className="pb-6 text-gray-600">· If a refund is requested, a 2% MRP deduction will be made for payment gateway fees and a refund acknowledgement will be sent via email once the refund has been initiated.</p>

                <p className="pb-6 text-gray-600">· Most refunds appear in your account within 5-7 working days. Contact your bank if there is a delay.</p>
            </section>
        </>
    );
}