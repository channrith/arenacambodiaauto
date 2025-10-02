import Sidebar from "../../_components/Layout/Sidebar";
import Navbar from "../../_components/Layout/Navbar";
import NewsContent from "@/app/_components/NewsContent";

export default function New({ params }) {
    const { slug } = params;

    const newsData = {
        "ក្រុមហ៊ុនបច្ចេកវិទ្យាយក្សចិន-huawei-សម្រេចបាននូវសមិទ្ធផលថ្មីដ៏សំខាន់មួយរបស់-ប្រព័ន្ធ-ads-qiankun-1": {
            title: `ក្រុមហ៊ុនបច្ចេកវិទ្យាយក្សចិន Huawei សម្រេចបាននូវសមិទ្ធផលថ្មីដ៏សំខាន់មួយរបស់ ប្រព័ន្ធ ADS "Qiankun"`,
            image: "/image/news/files-1759315271889-830589414.jpg",
            content: `<p style="font-size:16px;color:#333;line-height:1.5;margin-bottom:20px;text-align:left;">
                        នៅក្នុងពេលដែលក្រុមហ៊ុនជាច្រើនក្នុងវិស័យយានយន្តអគ្គិសនីនៅតែព្យាយាមស្វែងរកវិធីសាស្រ្តដើម្បីធ្វើឲ្យរថយន្តរបស់ខ្លួនកាន់តែមានភាពទាក់ទាញ ក្រុមហ៊ុន Huawei ហាក់ដូចជាបានដើរទៅមុខមួយលានជំហានរួចទៅហើយ។ ក្រុមហ៊ុនបច្ចេកវិទ្យាយក្សរបស់ចិនមួយនេះបានប្រកាសថា ប្រព័ន្ធបើកបរបែបទំនើបរបស់ខ្លួន ដែលត្រូវបានគេស្គាល់ថា “Qiankun” ត្រូវបានដំឡើងនៅក្នុងរថយន្តជាងមួយលានគ្រឿងរួចទៅហើយ។ នេះបើតាមប្រសាសន៍របស់លោក Jin Yuzhi ប្រធានផ្នែករថយន្តឆ្លាតវៃរបស់ Huawei ក្នុងអំឡុងព្រឹត្តការណ៏បច្ចេកវិទ្យារថាមពលថយន្តពិភពលោក ២០២៥(2025 World New Energy Vehicle Congress)។
                    </p>

                    <img src="/image/news/files-1759315271879-312390002.jpg" alt="Full Width Banner" style="width:100%;max-width:1200px;height: auto;border-radius:6px;display:block;margin-bottom:15px;" />
                    <p style="font-size:16px;color:#333;line-height:1.5;margin-bottom:20px;text-align:left;">
                        ប្រព័ន្ធ Qiankun គឺជាឈុតបច្ចេកវិទ្យាដ៏ទំនើបដែលជួយក្នុងការបើកបរ ការចតរថយន្ត ដោយសុវត្ថិភាព។ ប្រព័ន្ធ God's Eye ADS ថ្មីគឺជាផ្នែកសំខាន់មួយនៃបច្ចេកវិទ្យា Qiankun ដ៏ធំ។ រហូតមកដល់ពេលនេះ រថយន្តដែលបំពាក់ដោយប្រព័ន្ធនេះបានធ្វើដំណើរបានចម្ងាយជាង ៥ ពាន់លានគីឡូម៉ែត្រដោយមានជំនួយពីវា។ ចម្ងាយនេះគឺប្រៀបដូចជាការបើកបរទៅកាន់ភពព្រះអាទិត្យហើយត្រឡប់មកវិញច្រើនជាង ១៦.   ដង។
                    </p>

                    <img src="/image/news/files-1759315271860-693653762.jpg" alt="Full Width Banner" style="width:100%;height: auto;border-radius:6px;display:block;margin-bottom:15px;" />
                    <p style="font-size:16px;color:#333;line-height:1.5;margin-bottom:20px;text-align:left;">
                        ក្នុងអំឡុងពេលនេះ ប្រព័ន្ធសុំចតរថយន្តដោយស្វ័យប្រវត្តិអាចលើសជាង ២៨០ លានដង ហើយត្រូវបានគេជឿថាវាបានការពារគ្រោះថ្នាក់ដែលទំនងជាអាចកើតមានឡើងរហូតទៅដល់ជាង ២,៧១ លានលើក។ តួរលេខទាំងនេះ យោងទៅតាមក្រុមហ៊ុនបច្ចេកវិទ្យាយក្សចិនមួយនេះ គឺបានឧទាហរណ៍ជាក់ស្តែងដែលបច្ចេកវិទ្យាអាចជួយសង្គ្រោះជីវិត និងការពារការខូចខាត។
                    </p>
                    <p style="font-size:16px;color:#333;line-height:1.5;margin-bottom:20px;text-align:left;">
                        Huawei បានចាប់ដៃគូជាមួយក្រុមហ៊ុនផលិតរថយន្តជាច្រើនដើម្បីរួមបញ្ចូលប្រព័ន្ធរបស់ខ្លួន។ ម៉ាកយីហោដូចជា Avatr, Deepal និង Voyah គឺជាម៉ាកយីហោមួយចំនួនក្នុងចំណោមម៉ាកយីហោដែលបានប្រើប្រាស់ដំបូងគេ។ ការប្រើប្រាស់យ៉ាងទូលំទូលាយនេះនៅលើម៉ូដែលផ្សេងៗគ្នាដែលមានចំនួនរហូតដល់ ២៨ម៉ូដែល បានបង្ហាញថា Huawei មានភាពម៉ឺងម៉ាត់អំពីឧស្សាហកម្មរថយន្តអគ្គិសនី មិនមែនដោយការផលិតរថយន្តផ្ទាល់ខ្លួនទេ ប៉ុន្តែដោយការផ្តល់បច្ចេកវិទ្យាខួរក្បាល (chip) ដើម្បីដំណើរការពួកវា។ ផ្នែក cockpit ដែលដំណើរការដោយ HarmonyOS ដែលជាផ្នែកដ៏សំខាន់នៃប្រព័ន្ធនេះ ក៏បានទទួលការប្រើប្រាស់គួរឱ្យចាប់អារម្មណ៍ផងដែរ ដោយមុខងារជំនួយសំឡេងរបស់វាត្រូវបានដំណើរការ ២៣៨ លានដង។
                    </p>

                    <img src="/image/news/files-1759315271874-729759179.jpg" alt="Full Width Banner" style="width:100%;height: auto;border-radius:6px;display:block;margin-bottom:15px;" />
                    <p style="font-size:16px;color:#333;line-height:1.5;margin-bottom:20px;text-align:left;">
                        លោក Jin Yuzhi ក៏បានចែករំលែកចក្ខុវិស័យរបស់ Huawei សម្រាប់អនាគតកាលផងដែរ នៃការបើកបរ ដែលលោកបានរៀបរាប់ក្នុង “បីដំណាក់កាល”។ ដំណាក់កាលទី១៖ ចាប់ពីឆ្នាំ ២០១៥ ដល់ឆ្នាំ ២០២២ គឺផ្តោតលើការប្រើប្រាស់ថាមពលអគ្គិសនី ដែលជំនួសសាំងដោយអគ្គិសនីដែលមានតម្លៃថោក និងស្អាតជាង។ បច្ចុប្បន្នយើងស្ថិតនៅក្នុងដំណាក់កាលទី២ ដែលចាប់ពីឆ្នាំ ២០២២ ដល់ឆ្នាំ ២០២៧។ ដំណាក់កាលនេះផ្តោតលើ “ភាពឆ្លាតវៃ” ដែលជាក្បួនដោះស្រាយភាពឆ្លាតវៃធ្វើឱ្យការបើកបរកាន់តែមានសុវត្ថិភាព និងមិនសូវមានភាពតានតឹង។
                    </p>
                    <p style="font-size:16px;color:#333;line-height:1.5;margin-bottom:20px;text-align:left;">
                        ដំណាក់កាលទី៣៖ដែលគ្រោងនឹងចាប់ផ្តើមនៅឆ្នាំ ២០២៧ គឺ “ស្វ័យប្រវត្តិកម្ម”។ នេះគឺជាពេលដែលអ្វីៗកាន់តែគួរឱ្យចាប់អារម្មណ៍ជាមួយនឹងរថយន្តដែលអាចបើកបរដោយខ្លួនឯង ដែលអាចផ្លាស់ប្តូររបៀបដែលយើងគិតអំពីការដឹកជញ្ជូន។ ដើម្បីឈានទៅដល់អនាគតស្វ័យប្រវត្តិកម្មនេះរបស់ក្រុមហ៊ុន Huawei គឺមានផែនការច្បាស់លាស់។
                    </p>

                    <img src="/image/news/files-1759315271884-606118015.jpg" alt="Full Width Banner" style="width:100%;height: auto;border-radius:6px;display:block;margin-bottom:15px;" />
                    <p style="font-size:16px;color:#333;line-height:1.5;margin-bottom:20px;text-align:left;">
                        មុនដំណាច់ឆ្នាំ ២០២៥ ក្រុមហ៊ុននឹងចេញប្រព័ន្ធ ADS 4 របស់ខ្លួន ដែលនឹងណែនាំមុខងារបើកបរស្វយ័តកម្រិត ៣ (L3) សម្រាប់ផ្លូវហាយវេ។ L3 មានន័យថា រថយន្តអាចគ្រប់គ្រងកិច្ចការបើកបរភាគច្រើននៅលើផ្លូវហាយវេ ប៉ុន្តែអ្នកបើកបរត្រូវតែត្រៀមខ្លួនដើម្បីគ្រប់គ្រងវិញប្រសិនបើចាំបាច់។ នៅឆ្នាំ ២០២៦ Huawei រំពឹងថានឹងឃើញរថយន្តជាច្រើនទៀតដែលមានសមត្ថភាព L3 នៅលើផ្លូវ ហើយថែមទាំងនឹងចាប់ផ្តើមសាកល្បងប្រព័ន្ធកម្រិត ៤ (L4) នៅក្នុងទីក្រុង។ L4 គឺជាជំហានដ៏ធំមួយដែលរថយន្តអាចបើកបរដោយខ្លួនឯងនៅក្នុងតំបន់ជាក់លាក់ដោយគ្មានការអន្តរាគមន៍ រឹ ការបើកបរពីមនុស្សឡើយ។
                    </p>
                    <p style="font-size:16px;color:#333;line-height:1.5;margin-bottom:20px;text-align:left;">
                        នៅឆ្នាំ ២០២៧ នៅពេលដែលផ្លូវហាយវេ និងផ្លូវក្នុងទីក្រុងកាន់តែច្រើនត្រូវបានគូសផែនទីសម្រាប់មុខងារ Navigation Cruise Assist របស់ខ្លួន Huawei ជឿថា L3 នឹងក្លាយជារឿងធម្មតា។ ក្នុងពេលជាមួយគ្នានេះ បច្ចេកវិទ្យា L4 នឹងចាប់ផ្តើមត្រូវបានប្រើប្រាស់ជាលក្ខណៈពាណិជ្ជកម្ម ដោយត្រួសត្រាយផ្លូវសម្រាប់រថយន្ត Robotaxis និងរថយន្តដឹកជញ្ជូនស្វ័យប្រវត្តិកម្ម។
                    </p>`
        },
        "arenaev-0002": {
            title: "Arena EV Review",
            image: "/image/arenaev_0002.jpg",
            content: "Detailed review of Arena EV 0002 model."
        },
        "arenaev-0003": {
            title: "Arena EV Launch Event",
            image: "/image/arenaev_0003.jpg",
            content: "Coverage of the Arena EV launch event."
        }
    };

    const news = newsData[decodeURIComponent(slug)];


    return (
        <main className="main">
            <Navbar />
            <div className="main__container">
                <Sidebar />
                <div className="content">
                    <img src={news ? news.image : ""} alt="Full Width Banner" className="full-width-image" />
                    <h2 className="full-width-title">{news ? news.title : ""}</h2>

                    <NewsContent content={news ? news.content : "<p>News article not found.</p>"} />

                    {/* <div className="two-images">
                        <img src="/image/arenaev_0001.jpg" alt="Image 1" />
                        <img src="/image/arenaev_0002.jpg" alt="Image 2" />
                    </div> */}

                    <p>ប្រភព៖ ArenaEV</p>
                    <p>ប្រែសំរួល៖ ផាកឃឺ</p>
                </div>
            </div>
        </main>
    );
}
