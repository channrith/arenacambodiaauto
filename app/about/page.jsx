import Sidebar from "../_components/Layout/Sidebar";
import Navbar from "../_components/Layout/Navbar";
import Hero from "../_components/Layout/Hero";

export default function About() {
    const videos = ["GyPo4oTFL0E", "E2cr8Xkg_KI", "dQw4w9WgXcQ", "cW56AuNHLag", "lMo3Cd7rdnY", "xUkPbfherCY"];

    return (
        <main className="main">
            <Navbar />
            <div className="main__container">
                <Sidebar />
                <div className="content">
                    <Hero />

                    <div className="about">
                        <div class="about-text">
                            <h3>អំពីយើង</h3>
                            <p>អេរិនណា ខេមបូឌាអូតូ (Arena Cambodia Auto) គឺជាគេហទំព័រ ដែលនិយាយ ឬ ផ្សព្វផ្សាយអំពី ឧស្សារហកម្ម រថយន្ត ក្នុងស្រុក និង ក្រៅស្រុក និង ផ្តល់ចំណេះដឹងដែលទាក់ទងអំពីវិស័យរថយន្តនៅក្នុងប្រទេសកម្ពុជា ក៏ដូចជាក្រៅបទេសផងដែរ។ មិនត្រឹមតែប៉ុណ្ណោះពួកយើងមានគោលបំណងនិងផ្តល់ ព័ត៌មានដែលមានប្រភពច្បាស់លាស់ដែលទាក់ទងទៅនិងវិស័យរថយន្ត ក៏ដូចជាចំណេះដឹងអំពីការថែទាំរថយន្ត និង អំពីច្បាប់ចរាចរណ៏ជាដើម។ល។</p>
                        </div>

                        <div class="about-text">
                            <h3>បេសកកម្មរបស់យើង:</h3>
                            <p>បេសកកម្មរបស់យើងគឺដើម្បីផ្តល់ព័ត៌មាន និង ចំណេះដឹងដ៏ទូលំទូលាយទៅអតិថិជនដែលមានតម្រូវការយានយន្តទាំងអស់នៅក្នុងប្រទេសកម្ពុជា ចាប់ពីការស្វែងរករថយន្តថ្មីដែលស័ក្តិសមបំផុតសម្រាប់អ្នក និងក្រុមគ្រួសាររបស់អ្នកក្នុងតម្លៃសមរម្យ និងឆាប់រហ័ស។</p>
                        </div>

                        <div class="about-text">
                            <h3>អ្វីដែលយើងផ្តល់ជូន:</h3>
                            <p><strong>ទីផ្សារដ៏ធំទូលាយ:</strong> អ្នកអាចស្វែងរកយានយន្តជាច្រើនប្រភេទ រាប់ចាប់ពីឡានគ្រួសារ រហូតដល់រថយន្តស្ព័រទំនើប តាមក្រុមហ៊ុននានា និងឃ្លាំងលក់រថយន្តដែលគួរឱ្យទុកចិត្តនៅទូទាំងប្រទេសកម្ពុជា។</p>
                            <p><strong>ការស្វែងរកដ៏ឆ្លាតវៃ:</strong> គេហទំព័រ នេះ ជាប្រព័ន្ធស្វែងរកដ៏ទំនើបរបស់យើងអនុញ្ញាតឱ្យអ្នកស្វែងរករថយន្តយ៉ាងងាយស្រួលដោយផ្អែកលើម៉ាក ម៉ូដែល ឆ្នាំ តម្លៃ និងលក្ខណៈពិសេសផ្សេងទៀតដែលអ្នកចង់បាន។</p>
                            <p><strong>ធនធាន និងព័ត៌មាន:</strong> ពួកយើងមានក្រុមការងារដែលមានបទពិសោធន៏ ដែលអាចផ្តល់ព័ត៌មានរថយន្ត និង ចំណេះដឹងផ្សេងៗពាក់ព័ន្ធនិងវិស័យរថយន្ត។</p>
                        </div>

                        <div class="contact-section">
                            <h3>ទំនាក់ទំនងមកកាន់ពួកយើង៖</h3>
                            <p>អ៊ីម៉ែល៖ <a href="mailto:info_arenacambo@gmail.com">info_arenacambo@gmail.com</a></p>
                            <p>ទូរស័ព្ទ៖ (855) 096 7172 226, (855) 097 2000 921</p>
                        </div>

                        <div class="three-image-layout">
                            <div class="top-images">
                                <img src="./image/about1.png" alt="Small Image 1" />
                                <img src="./image/cameraman.jpg" alt="Small Image 2" />
                            </div>
                            <div class="bottom-image">
                                <img src="./image/types of meetings-blog-post-header_1920x1080.jpg" alt="Large Image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
