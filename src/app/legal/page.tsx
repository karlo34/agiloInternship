import Navbar from "../components/Nav"
import Footer from "../components/Footer";
export default function LegalPage() {
    return (
        <div className="">
            <Navbar />
            <h1 className="text-5xl text-center font-medium mt-30 sm:mt-0">Privacy Policy for Sofa Society</h1>
            <section className="w-full my-5 flex justify-center">
                <div className="w-full max-w-4xl px-30 sm:pr-[200px] leading-[1.4] flex flex-col gap-16 my-20">
                    <p>At Sofa Society, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you interact with our website, services, and products. By using our platform, you consent to the practices described in this policy.</p>
                    <div className="flex flex-col gap-4">
                        <h1 className="text-2xl font-semibold">1. Information We Collect:</h1>
                        <p>We may collect personal information you provide directly to us, such as:</p>
                        <ul className="list-disc ml-6">
                            <li>Name, email address, and contact details when you sign up for an account.</li>
                            <li>Billing and shipping addresses when you make a purchase.</li>
                            <li>Payment information (credit/debit card details) for completing transactions securely.</li>
                            <li>Personal preferences and fashion interests you share with us.</li>
                        </ul>
                        <p>Additionally, we may automatically collect certain information when you access or use our website, including:</p>
                        <ul className="list-disc ml-6">
                            <li>IP address, browser type, operating system, and device information.</li>
                            <li>Usage data, such as pages visited, time spent on our platform, and referring website.</li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h1 className="text-2xl font-semibold">2. How We Use Your Information:</h1>
                        <p>We may use your personal information for various purposes, including but not limited to:</p>
                        <ul className="list-disc ml-6">
                            <li>Providing and managing your account, purchases, and orders.</li>
                            <li>Customizing your shopping experience and suggesting relevant products.</li>
                            <li>Sending you updates, newsletters, and marketing communications (you can opt-out anytime).</li>
                            <li>Analyzing user behavior to improve our website and services.</li>
                            <li>Complying with legal obligations and enforcing our Terms of Service.</li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h1 className="text-2xl font-semibold">3. Cookies and Similar Technologies:</h1>
                        <p>We use cookies and similar technologies to collect information about your browsing activity on our website. These technologies help us analyze usage patterns and enhance user experience. You can manage your cookie preferences through your browser settings.</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h1 className="text-2xl font-semibold">4. Data Sharing and Disclosure:</h1>
                        <p>We may share your personal information with third parties under certain circumstances, including:</p>
                        <ul className="list-disc ml-6">
                            <li>Service providers who assist us in operating our business and delivering services.</li>
                            <li>Legal authorities or government agencies as required by law.</li>
                        </ul>
                        <p>We do not sell or rent your personal information to third parties for their marketing purposes.</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h1 className="text-2xl font-semibold">5. Data Security:</h1>
                        <p>We implement reasonable security measures to protect your personal information from unauthorized access, alteration, or disclosure. However, no method of transmission over the internet or electronic storage is completely secure.</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h1 className="text-2xl font-semibold">6. Your Choices:</h1>
                        <p>You have the right to:</p>
                        <ul className="list-disc ml-6">
                            <li>Review and update your personal information in your account settings.</li>
                            <li>Opt-out of receiving marketing communications.</li>
                            <li>Delete your account (subject to applicable laws and regulations).</li>
                        </ul>
                        <p>We do not sell or rent your personal information to third parties for their marketing purposes.</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h1 className="text-2xl font-semibold">7. Children's Privacy:</h1>
                        <p>Our services are not intended for individuals under the age of 16. If we become aware that we have collected personal information from children without parental consent, we will take prompt action to delete such data.</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h1 className="text-2xl font-semibold">8. Changes to this Privacy Policy:</h1>
                        <p>We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes via email or by prominently posting a notice on our website.</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h1 className="text-2xl font-semibold">9. Contact Us:</h1>
                        <p>If you have any questions, concerns, or requests regarding this Privacy Policy or how we handle your personal information, please contact us at:</p>
                        <div className="pt-2">
                            <p>Email: privacy@sofasociety.com</p>
                            <p>Address: Skärgårdsvägen 12, 124 55 Stockholm</p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}