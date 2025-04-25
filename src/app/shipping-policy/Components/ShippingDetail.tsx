import Link from "next/link";

export default function ShippingDetail() {
    return (
        <>
            <section className="px-30 py-6">
                <h2 className="pb-4 font-semibold text-[30px] text-center">Shipping policy</h2>


                <p className="pb-6"><strong>DOMESTIC SHIPPING</strong></p>

                <p className="pb-4"><strong>PROCESSING TIME</strong></p>

                <p className="pb-6">Confirmed orders are processed within 1-2 business days.</p>

                <p className="pb-4"><strong>TRACK AN ORDER</strong></p>
                <p className="pb-6">Once dispatched, you will receive a notification email or message with the tracking information. You can track your order's progress on the logistics partner's website.</p>

                <p className="pb-4"><strong>ESTIMATED DELIVERY TIME</strong></p>
                <p className="pb-6">The standard delivery time for orders is 5-7 business days via surface through our logistics partners. However, due to external factors such as during festivals, public holidays, monsoons, unseasonal rains etc, delivery time may be longer.</p>

                <p className="pb-4"><strong>DAMAGED PRODUCT</strong></p>
                <p className="pb-6">If you receive a damaged shipment or item(s) are missing, please contact us on <Link href="tel: 8220255746"> +91 8220255746</Link>. Take photos of the consignment, note the damage and/or missing items on the shipping label or receipt and contact us. After we receive your photos we will promptly send a replacement.</p>

                <p className="pb-4"><strong>WRONG PRODUCT</strong></p>

                <p className="pb-6">In the event of receiving the incorrect product, please contact us at <Link href="tel: 8220255746"> +91 8220255746</Link> during business hours (10:00 to 18:00) on working days. Send a picture of the wrong product you received and send us. You can courier the product back and we will send you the replacement asap.</p>


                <p className="pb-4"><strong>INTERNATIONAL SHIPPING</strong></p>

                <p className="pb-3">We provide worldwide shipping for all our products through FedEx.</p>
                <p className="pb-6">If you have any questions or concerns, our customer service team is available to assist you via <Link href="meilto: support@powerageperformance.com"> support@powerageperformance.com</Link> or via whatsapp/phone <Link href="tel: 8220255746"> (+91 8220255746)</Link> during business hours (10:00 to 18:00 IST) on working days.</p>

                <p className="pb-4"><strong>DECLARATION VALUE ON SHIPPING DOCUMENTS</strong></p>
                <p className="pb-6">The full value of the package contents will be declared and it cannot be altered.</p>

                <p className="pb-4"><strong>INCLUSIONS IN SHIPPING CHARGES</strong></p>
                <p className="pb-6">Both packaging materials & handling fees are included in the shipping charges and are calculated based on the higher of the volumetric or actual gross weight of the order.</p>

                <p className="pb-4"><strong>ADDITIONAL CUSTOMS DUTY/VAT/TAXES</strong></p>

               <p className="pb-6">Shipments may be subject to import duties, customs fees, and taxes as per the laws of the destination country. These fees are the responsibility of the recipient and are not included in the shipping charges. The fees for these duties and taxes vary by country and can change, so we cannot provide an estimate on the same.</p>

                <p className="pb-4"><strong>PROCESSING TIME</strong></p>
                <p className="pb-6">Orders are processed within 1-2 working days.</p>

                <p className="pb-4"><strong>TRACK MY ORDER</strong></p>
                <p className="pb-6">An email notification will be sent once your order has been dispatched. You can track its progress using the AWB number provided on the logistics partners' website.</p>

                <p className="pb-4"><strong>ESTIMATED DELIVERY TIME</strong></p>
                <p className="pb-6">Standard delivery time is 7-10 working days through air via our logistics partners. However, some areas may take longer.</p>

                <p className="pb-4"><strong>DAMAGED SHIPMENT</strong></p>
                <p className="pb-6">If you receive a damaged shipment or are missing items, take photos of the consignment and send it to us on <Link href="meilto: support@powerageperformance.com"> support@powerageperformance.com</Link> or via whatsapp/phone <Link href="tel: 8220255746"> +91 8220255746</Link>, we will revert to you. Keep the original packaging materials.</p>
            </section>
        </>
    );
}