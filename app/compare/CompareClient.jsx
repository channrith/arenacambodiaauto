"use client";

import { useMemo, useState } from "react";
import CompareFeatures from "../_components/CompareFeature";
import CompareHeader from "../_components/CompareHeader";
import Hero from "../_components/Layout/Hero";
import MediaDisplay from "../_components/MediaDisplay";

export default function CompareClient({ searchParams }) {
    const { make, market_region, model } = searchParams;

    // 🔍 Example mock data (replace later with API)
    const carDatabase = [
        {
            name: "Toyota Urban Cruiser FWD 49kWh",
            image: "toyota-urban-cruiser-FWD-49kWh.jpg",
            options: [
                {
                    category: "LAUNCH",
                    specs: [
                        { label: "Announced", value: "2024, December 12" },
                        { label: "Status", value: "Coming soon. Expected release 2025" },
                    ],
                },
                {
                    category: "PERFORMANCE",
                    specs: [
                        { label: "Power", value: "FWD 106 kw (144 hp)" },
                        { label: "Torque", value: "189 Nm (139 lb-ft)" },
                    ],
                },
            ]
        },
        {
            name: "Toyota Corolla LE 2026",
            image: "vehicles/20251015/Corolla-LE-2026/Size-600px-x-320px-(Corolla-LE-2026).png",
            options: [
                {
                    category: "LAUNCH",
                    specs: [
                        { label: "Model", value: "Toyota Corolla LE  2026" },
                        { label: "Announced", value: "2025" },
                        { label: "Status", value: "2025" },
                        { label: "Base Price", value: "$ 22,725 (FWD) តំលៃក្នុងទីផ្សារសហរដ្ឋអាមេរិក" },
                        { label: "Country", value: "សហរដ្ឋអាមេរិក" },
                    ],
                },
                {
                    category: "Powertrain and Performance",
                    specs: [
                        { label: "Engine", value: "ម៉ាស៊ីន​ចំណុះ ២.០ លីត្រ ៤ ស៊ីឡាំង DOHC មាន ១៦ វ៉ាល់ ជាមួយ​ប្រព័ន្ធ Dual VVT-i (ប្រព័ន្ធ​​វ៉ាល់​ឆ្លាតវៃ) 2.0-liter 4-cylinder DOHC 16-valve with Dual Variable Valve Timing with intelligence (VVT-i)" },
                        { label: "Horsepower", value: "169ph @6600rpm" },
                        { label: "Torque", value: "204Nm @4400rpm" },
                        { label: "Electric Motors", value: "N/A" },
                        { label: "Battery", value: "N/A" },
                        { label: "Emission Rating", value: "យានយន្ត​បញ្ចេញ​ផ្សែង​ពុល​ទាប​បំផុត (SULEV-30)" },
                        { label: "Transmission", value: "ប្រអប់លេខអូតូ CVT ប្រភេទ Dynamic-Shift" },
                        { label: "Drivetrain", value: "Front-Wheel Drive (FWD)" },
                        { label: "Suspension", value: "ប្រព័ន្ធ​ជើងក្រោមខាងមុខ​​ប្រភេទ MacPherson Strut ជាមួយ​នឹង​ជើង​ទប់​លំនឹង; និង​ប្រព័ន្ធ​ជើងក្រោមខាង​ក្រោយ​ប្រភេទ Torsion Beam" },
                    ],
                },
                {
                    category: "Fuel Economy",
                    specs: [
                        { label: "FWD ( L/100km )", value: "City 7.3 L/100km, Highway 5.7 L/100km" },
                        { label: "AWD (L/100km)", value: "N/A" },
                        { label: "Chargine (AC)", value: "N/A" },
                        { label: "Fuel Tank Campacity", value: "50Liter" },
                    ],
                },
                {
                    category: "Exterior and Dimension",
                    specs: [
                        { label: "Wheels", value: "យ៉ាន់កង់ប្រភេទ​ដែក​ទំហំ ១៦ អ៊ីញ​ជាមួយ​គម្រប​កង់ និង​សំបក​កង់​ទំហំ P205/55R16 (16-in. steel wheels with covers and P205/55R16 tires)" },
                        { label: "Grille", value: "កាងមុខពណ៌ខ្មៅ (Black front grille)" },
                        { label: "Length", value: "4635.5mm" },
                        { label: "Width", value: "1780.54mm" },
                        { label: "Hight", value: "1435.1mm" },
                        { label: "Ground Clearance", value: "134.62mm" },
                        { label: "Curb Weight", value: "1340.36kg" },
                        { label: "Wheelbase", value: "2700.02mm" },
                        { label: "Towing Capacity", value: "N/A" },
                        { label: "Track (Front/rear)", value: "ចន្លោះកង់មុខ 1531.62mm , ចន្លោះកង់ក្រោយ 1549.4mm" },
                        { label: "Other Standard Features", value: "ប្រព័ន្ធ​ជូត​កញ្ចក់​ដែល​ដំណើរការ​អាចកំណត់ដោយ​មាន​រយៈ​ពេលបាន (Intermittent windshield wipers)។" },
                        { label: "Other Standard Features", value: "អង់តែន​រូបរាង​ព្រុយ​ត្រីឆ្លាម​ដែល​បំពាក់​លើ​ដំបូល​រថយន្ត​មាន​ពណ៌​ស៊ីគ្នា​ជាមួយ​តួ​រថយន្ត (Color-keyed roof-mounted shark-fin antenna)" },
                        { label: "Other Standard Features", value: "ចង្កៀង​មុខ​ប្រភេទ LED (LED headlights)" },
                        { label: "Other Standard Features", value: "ភ្លើងបំភ្លឺពេលថ្ងៃប្រភេទ LED (DRL) (LED Daytime Running Lights (DRL) )" },
                        { label: "Other Standard Features", value: "ភ្លើង​ក្រោយ​ប្រភេទ LED និង​ភ្លើង​ហ្វ្រាំង​ប្រភេទ LED (LED taillights and stop lights )" },
                        { label: "Other Standard Features", value: "កញ្ចក់​ចំហៀងប៊ូតុង​បញ្ជា​ដោយថាមពល​អគ្គិសនី​មាន​ពណ៌​ស៊ីគ្នា​ជាមួយ​តួ​រថយន្ត (Color-keyed power outside mirrors)" },
                        { label: "Other Standard Features", value: "កញ្ចក់​ចំហៀង​មាន​ពណ៌​ស៊ីគ្នា​ជាមួយ​តួរថយន្ត មាន​មុខងារ​កម្ដៅ​និងប៊ូតុង​បញ្ជា​ដោយថាមពល​អគ្គិសនី ជាមួយ​សញ្ញា​ដាស់តឿន​ប្រព័ន្ធ​តាមដាន​ចំណុច​ខ្វះចន្លោះ (Blind Spot Monitor)" },
                        { label: "Other Standard Features", value: "ដៃទ្វារខាងក្រៅមានពណ៌ស៊ីគ្នាជាមួយតួរថយន្ត (Color-keyed outside door handles)។" },
                    ],
                },
                {
                    category: "Interior and Technology",
                    specs: [
                        { label: "Seating", value: "ផ្ទុកបានចំនួន ៥នាក់។ កៅអី​អ្នក​បើកបរ​ស្រោប​ដោយ​ក្រណាត់​មានប៊ូតុងបញ្ជាបានមាន ៦មុខងារ និង​កៅអី​អ្នករួមដំណើរ​ខាងមុខ​មានប៊ូតុងបញ្ជា​បានមាន ៤ មុខងារ។" },
                        { label: "Infotainment Display", value: "អេក្រង់កំសាន្ត ប្រព័ន្ធ Toyota Audio Multimedia ទំហំ ៨ អ៊ីញ" },
                        { label: "Audio Multmedia", value: "ប្រព័ន្ធសម្លេងចំនួន ៦ (6 speaker audio system), Apple CarPlay® & Android Auto™ ដោយឥតប្រើខ្សែ, និងការប្រើប្រាស់សេវា SiriusXM® សាកល្បងរយៈពេល ៣ ខែ។" },
                        { label: "Connectivity", value: "រន្ធសាកថ្ម USB-C ចំនួនពីរនៅខាងមុខ,រន្ធសាកថ្ម USB-C ចំនួនពីរនៅខាងក្រោយ" },
                        { label: "Charging Pad", value: "N/A" },
                        { label: "Climate Control", value: "ម៉ាស៊ីនត្រជាក់ស្វ័យប្រវត្តិ ជាមួយតម្រងខ្យល់កាត់បន្ថយធូលីនិងលំអងផ្កា និងប៊ូតុងបញ្ជា (push-button controls)" },
                        { label: "Driver Diplay", value: "ផ្ទាំង​កុងទ័រ​ឌីជីថល​ទំហំ ៧ អ៊ីញ(7-in. digital gauge cluster )" },
                        { label: "Sterring Wheel", value: "ចង្កូត​បញ្ជា​ដោយ​ប្រព័ន្ធ​អគ្គិសនី (EPS) ប្រព័ន្ធ​ Rack-and-Pinion ជំនួយ​ដោយ​ថាមពល" },
                        { label: "Drive Mode", value: "Normal and Eco driving modes" },
                        { label: "Other Standard Features", value: "កៅអី​ក្រោយ​អាច​បត់​ចុះ​បាន​តាម​សមាមាត្រ ៦០% /៤០% ជាមួយ​ដៃ​ទ្រ​កណ្ដាល និង​កន្លែង​ដាក់​កែវ​ចំនួន​ពីរ" },
                        { label: "Other Standard Features", value: "ចង្កូតមាន ៣ កាំ អាចផ្អៀង/ទាញចេញ-ចូលបាន ជាមួយប៊ូតុងបញ្ជាសំឡេង, អេក្រង់ MID, ទូរស័ព្ទ Bluetooth® ឥតប្រើដៃ, បញ្ជាដោយសំឡេង, ប្រព័ន្ធ DRCC និងប្រព័ន្ធ LDA w/SA" },
                        { label: "Other Standard Features", value: "កញ្ចក់មើលក្រោយបន្សាបពន្លឺនៅពេលយប់/ថ្ងៃ (Day/night rearview mirror)" },
                        { label: "Other Standard Features", value: "កាមេរ៉ា​ថយ​ក្រោយ​ដែល​មាន​បង្កប់​ជាប់​នឹង​រថយន្ត ជាមួយ​ខ្សែ​បន្ទាត់​បង្ហាញ​ទិសដៅ (Integrated backup camera with projected path)។" },
                        { label: "Other Standard Features", value: "Center Console ជាមួយកន្លែងផ្ទុកឥវ៉ាន់ (Center console with storage compartment)" },
                        { label: "Other Standard Features", value: "នាឡិកា​ឌីជីថល (Digital clock )" },
                        { label: "Other Standard Features", value: "ប្រព័ន្ធ​បញ្ជា​ពី​ចម្ងាយ​ជាមួយមុខងារ​ច្រើន​ដែល​មាន​បង្កប់​ក្នុង​កូនសោរ​សម្រាប់​ចាក់សោរ, ដោះសោរ, បញ្ជា​សំឡេង​រោទិ៍ និង​បើក​គូទឡាន" },
                        { label: "Other Standard Features", value: "Overhead console with maplights" },
                        { label: "Other Standard Features", value: "មុខងារ​រលត់​ម៉ាស៊ីន​ដោយ​ស្វ័យប្រវត្តិ (Automatic Engine Shutoff)" },
                        { label: "Other Standard Features", value: "ប្រអប់​ដាក់​ឥវ៉ាន់​នៅ​ផ្នែក​ខាង​អ្នកដំណើរ (Passenger-side glove compartment)" },
                        { label: "Other Standard Features", value: "កន្លែង​ដាក់​កែវ​ចំនួន​ពីរ​នៅ​ខាងមុខ (Two front cup holders), កន្លែង​ដាក់​កែវ​ចំនួន​ពីរ​នៅ​ខាងក្រោយ (Two rear cup holders)" },
                        { label: "Other Standard Features", value: "ហោប៉ៅ​ដាក់​ឥវ៉ាន់​នៅ​ទ្វារ​មុខ​និងទ្វារ​ក្រោយ (Front- and rear-door storage pockets)" },
                        { label: "Other Standard Features", value: "ប្រព័ន្ធ​កម្ដៅ​រំលាយ​អ័ព្ទ​កញ្ចក់​ក្រោយ​ជាមួយ​កម្មវិធី​កំណត់​ពេលវេលា (Timer) (Rear window defogger with timer)" },
                        { label: "Other Standard Features", value: "កញ្ចក់​ទ្វារ​មុខ​និង​ក្រោយអាច​បើកបិទ​បញ្ជារដោយថាមពល​អគ្គិសនី​ជាមួយ​មុខងារ​បើក/បិទ​ស្វ័យប្រវត្តិ​ដោយ​គ្រាន់តែ​ប៉ះ​ម្តង" },
                        { label: "Other Standard Features", value: "សោរទ្វារ​អគ្គិសនី​ជាមួយ​មុខងារ​ចាក់សោរ​ស្វ័យប្រវត្តិ (Power door locks with automatic locking feature)" },
                        { label: "Other Standard Features", value: "រន្ធ​ដោត​ថាមពល​ជំនួយ ១២V ចំនួន​មួយ (One 12V auxiliary power outlet)" },
                    ],
                },
                {
                    category: "Safety and Driver assistance",
                    specs: [
                        { label: "Toyota Safety Sense™ 3.0", value: "TSS3.0" },
                        { label: "Toyota Safety Sense™ 3.0", value: "ប្រព័ន្ធសុវត្ថិភាពទប់ស្កាត់ការបុកទង្គិច ជាមួយមុខងារចាប់សញ្ញាអ្នកថ្មើរជើង (PCS w/PD)(Pedestrian Detection (PCS w/PD))" },
                        { label: "Toyota Safety Sense™ 3.0", value: "ប្រព័ន្ធជំនួយការបើកបរក្នុងគន្លងផ្លូវ (LTA)(Lane Tracing Assist (LTA))" },
                        { label: "Toyota Safety Sense™ 3.0", value: "ប្រព័ន្ធគ្រប់គ្រងល្បឿនថេរតាមរ៉ាដាគ្រប់ល្បឿន (DRCC) (Dynamic Radar Cruise Control (DRCC))" },
                        { label: "Toyota Safety Sense™ 3.0", value: "ប្រព័ន្ធដាស់តឿននៅពេលចាកចេញពីគន្លងផ្លូវ ជាមួយមុខងារជំនួយចង្កូត (LDA w/SA)(Alert with Steering Assist (LDA w/SA))" },
                        { label: "Toyota Safety Sense™ 3.0", value: "មុខងារបំភ្លឺភ្លើងហ្វារដោយស្វ័យប្រវត្តិ (AHB) ((Automatic High Beams (AHB))" },
                        { label: "Toyota Safety Sense™ 3.0", value: "ប្រព័ន្ធចាប់សញ្ញាផ្លាកសញ្ញាចរាចរណ៍ (RSA)  (Road Sign Assist (RSA))" },
                        { label: "Toyota Safety Sense™ 3.0", value: "ប្រព័ន្ធ​ត្រួតពិនិត្យ​សម្ពាធ​កង់​រថយន្ត (TPMS)" },
                        { label: "Toyota Safety Sense™ 3.0", value: "ប្រព័ន្ធ​តាមដាន​ចំណុច​ខ្វះ​ចន្លោះ (BSM) ជាមួយ​មុខងារ​ដាស់តឿន​ចរាចរណ៍​ពេល​ថយ​ក្រោយ (RCTA)។" },
                        { label: "Additional Safety Features", value: "Crumple Zone មុខ​និង​ក្រោយ​ស្រូប​យក​កម្លាំង​បុក​ជាមួយ​ធ្នឹម​ការពារ​ទ្វារ​ពេល​បុក​ពី​ចំហៀង (Front and rear energy-absorbing crumple zones with side-impact door beams)" },
                        { label: "Additional Safety Features", value: "កៅអី​អ្នកបើកបរ​និង​អ្នករួមដំណើរ​មុខ​ដែល​មាន​មុខងារ​កាត់បន្ថយ​ការ​រងរបួស​ក (Whiplash)(Driver and front passenger Whiplash-Injury-Lessening (WIL))" },
                        { label: "Additional Safety Features", value: "បន្ទះ​តួរថយន្ត​ធ្វើ​ពី​ដែកថែប​រឹងមាំ​កម្រិត​ខ្ពស់ (High-tensile-strength steel body panels )" },
                        { label: "Additional Safety Features", value: "ពោង​សុវត្ថិភាព​ចំនួន ១០ — រួម​មាន​ប្រព័ន្ធ​ពោង​សុវត្ថិភាព​ទំនើប​សម្រាប់​អ្នកបើកបរ​និង​អ្នករួមដំណើរ​ខាងមុខ​, ពោង​សុវត្ថិភាព​ចំហៀង​ដែល​បំពាក់​នៅ​លើ​" },
                        { label: "Additional Safety Features", value: "កៅអី​អ្នកបើកបរ​និង​អ្នករួមដំណើរខាង​មុខ​, ពោង​សុវត្ថិភាព​ត្រង់​ជង្គង់​អ្នកបើកបរ​, ពោង​សុវត្ថិភាព​ក្រោម​កៅអី​អ្នករួមដំណើរ​, ពោង​សុវត្ថិភាព​ចំហៀង​នៅ​កៅអី​ក្រោយ​, " },
                        { label: "Additional Safety Features", value: "និង​ពោង​សុវត្ថិភាព​លើតំបូលរថយន្តសំរាប់​ខាងមុខ​និង​ក្រោយ។" },
                        { label: "Additional Safety Features", value: "ចង្កូត​ដែលអាច​ស្រូប​កម្លាំង​បុក​និង​បាក់​ចូល​បាន (Energy-absorbing collapsible steering column)" },
                        { label: "Additional Safety Features", value: "LATCH (Lower Anchor និងទំពក់សម្រាប់កុមារ) រួមមាន Lower Anchor នៅលើកៅអីក្រោយផ្នែកចំហៀង និងទំពក់ភ្ជាប់នៅលើកៅអីក្រោយទាំងអស់។" },
                        { label: "Additional Safety Features", value: "ឧបករណ៏ខាងផ្ទៃខាងក្នុងមួយចំនួនផលិតឡើងដើម្បីកាត់បន្ថយនិង ​ការពារ​ក្បាល​ពី​ការ​បុក​ទង្គិច (Head-impact protection structure)" },
                        { label: "Additional Safety Features", value: "ហ្វ្រាំងដៃ​អគ្គិសនី (EPB) ឬ ហ្វ្រាំង​ចត​រថយន្ត​អគ្គិសនី (Electric Parking Brake (EPB) )" },
                        { label: "Additional Safety Features", value: "ឧបករណ៍​ចុចបញ្ជាកម្ពស់​ខ្សែ​ក្រវាត់​ស្មា​ខាងមុខ, ប្រព័ន្ធ​រឹត​ខ្សែ​ក្រវាត់​សុវត្ថិភាព​សម្រាប់​អ្នកបើកបរ​និង​អ្នករួមដំណើរ​មុខ​ជាមួយ​មុខងារ​កំណត់​កម្លាំង។" },
                        { label: "Additional Safety Features", value: "ខ្សែ​ក្រវាត់​សុវត្ថិភាព 3 Point សម្រាប់​កៅអី​ទាំង​អស់; និង​មុខងារ​រឹត​ខ្សែ​ក្រវាត់​ដោយ​ស្វ័យប្រវត្តិ (ELR) នៅ​លើ​ផ្នែក​អ្នកបើកបរ" },
                        { label: "Additional Safety Features", value: "​ទ្វារ​ក្រោយមាន Locks សុវត្ថិភាព​ការពារ​កុមារ (Child-protector rear door locks)។" },
                        { label: "Additional Safety Features", value: "ប្រព័ន្ធ​រារាំង​ម៉ាស៊ីន​មិន​ឱ្យ​ដំណើរការ (Engine immobilizer)" },
                        { label: "Additional Safety Features", value: "ប្រព័ន្ធ​ជំនួយ​ការ​ចេញ​ដំណើរ​ឡើង​ចំណោត (HAC)" },
                    ],
                },
            ],
        },
        {
            name: "Honda e:Ny1 68kWh",
            image: "honda-eny1-68kWh.jpg",
            options: [
                {
                    category: "LAUNCH",
                    specs: [
                        { label: "Announced", value: "2025, February 27" },
                        { label: "Status", value: "Coming soon. Expected release 2026" },
                        { label: "Base price", value: "$42,000" },
                    ],
                }
            ]
        },
        {
            name: "Hyundai Kona Electric 64kWh",
            image: "hyundai-kona-64kWh.jpg",
            options: [{
                category: "LAUNCH",
                specs: [
                    { label: "Announced", value: "2023, November 15" },
                    { label: "Status", value: "Released 2024" },
                    { label: "Base price", value: "$39,500" },
                ],
            }]
        },
    ];

    const compareWith = make === 'toyota' && market_region === 'global' && model === 'toyota-corolla-le-2026' ? carDatabase[1] : carDatabase[0];

    const [products, setProducts] = useState([compareWith]);

    const handleSearch = (index, query) => {
        if (!query.trim()) return;

        const matchedCar = carDatabase.find((c) =>
            c.name.toLowerCase().includes(query.toLowerCase())
        );
        if (!matchedCar) return;
        // Only allow 2 cars max
        if (products.length === 1) {
            // Add new one
            setProducts((prev) => [...prev, matchedCar]);
        } else {
            setProducts((prev) => {
                const updated = [...prev];

                if (index === 0) {
                    // replace first product
                    updated[0] = matchedCar;
                } else if (index === 1) {
                    // add second product if not exist
                    if (updated.length < 2) updated.push(matchedCar);
                    else updated[1] = matchedCar;
                }

                return updated;
            });
        }
    };

    const structuredData = useMemo(() => {
        const productList = products.map((p) => ({
            "@type": "Product",
            name: p.name,
            image: `https://arenacambodiaauto.com/${p.image}`,
            brand: { "@type": "Brand", name: p.brand },
        }));

        return {
            "@context": "https://schema.org",
            "@type": "ProductComparison",
            name: "Car Comparison",
            description: "Arena Cambodia Auto is a website of vehicle news and knowledge.",
            url: "https://arenacambodiaauto.com/compare",
            productList,
        };
    }, [products]);

    const breadcrumbJsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://arenacambodiaauto.com",
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "About Us",
                "item": "https://arenacambodiaauto.com/compare",
            },
        ],
    };
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />
            <div className="content">
                <div className="featured-grid">
                    <Hero
                        type="youtube"
                        src="https://www.youtube.com/watch?v=A424QQnQUh8" />
                    <div className="small-gid">
                        <MediaDisplay
                            type="ads"
                            src="/image/Oct24-Cellcard-Hero-Banner-Mobile-720-x-460-eng.jpg"
                            link="https://arenacambodiaauto.com/promo"
                            alt="Your ad could be here!" />
                        <MediaDisplay
                            type="ads"
                            src="/image/f2qy2v60cFOQIjm3DxAbrULlUgiBvdTWCGOG4WUp.jpg"
                            link="https://arenacambodiaauto.com/promo"
                            alt="Your ad could be here!" />
                    </div>
                </div>
                <div className="compare">
                    <CompareHeader
                        products={products}
                        onSearch={handleSearch}
                        carDatabase={carDatabase} />
                    <CompareFeatures products={products} />
                </div>
            </div>
        </>
    );
}
