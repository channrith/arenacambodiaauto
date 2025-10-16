"use client"

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCubes, faComment, faImage } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "../../../../_components/Layout/Sidebar";
import Navbar from "../../../../_components/Layout/Navbar";
import Hero from '@/app/_components/Layout/Hero';
import { groupSpecsByLabel } from '@/app/utils/common';

export default function Make() {
    const cdnUrl = process.env.NEXT_PUBLIC_CDN;
    const [activeTab, setActiveTab] = useState('opinions');
    const [selectedColor, setSelectedColor] = useState({});
    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    const { model, maker, market_region } = useParams();

    const getCarData = {
        'urban-cruiser-FWD-49kWh': {
            name: "Toyota Urban Cruiser FWD 49kWh",
            year_start: 2024,
            year_end: null,
            image: "/01_ZEVConcpt_FR_Global.jpg",
            features: {
                colors: [
                    {
                        name: "Calestite",
                        code: "#585f70",
                        image: "vehicles/20251015/Corolla-LE-2026/colors/Calestite-color-.png"
                    },
                ],
                images: [
                    "arenaev_0001.jpg",
                    "arenaev_0002.jpg",
                    "arenaev_0003.jpg",
                ]
            },
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
                        { label: "Power", value: "FWD 106 kW (144 hp)" },
                        { label: "Torque", value: "189 Nm (139 lb-ft)" },
                        { label: "Acceleration", value: "" },
                        { label: "Max speed", value: "" },
                    ],
                },
            ],
        },
        'toyota-corolla-le-2026': {
            name: 'Toyota Corolla LE 2026',
            year_start: 2024,
            year_end: null,
            image: "vehicles/20251015/Corolla-LE-2026/Size-600px-x-320px-(Corolla-LE-2026).png",
            features: {
                colors: [
                    {
                        name: "Calestite",
                        code: "#585f70",
                        image: "vehicles/20251015/Corolla-LE-2026/colors/Calestite-color-.png"
                    },
                    {
                        name: "Blueprint",
                        code: "#0d102f",
                        image: "vehicles/20251015/Corolla-LE-2026/colors/Blueprint-Color.png"
                    },
                    {
                        name: "Wind Chill Pearl",
                        code: "#e3e7e7",
                        image: "vehicles/20251015/Corolla-LE-2026/colors/Wind-Chill-Pearl-Color.png"
                    },
                    {
                        name: "Ice Cap",
                        code: "#f1f1f1",
                        image: "vehicles/20251015/Corolla-LE-2026/colors/Ice-Cap-Color.png"
                    },
                    {
                        name: "Ruby Flare Pearl",
                        code: "#660814",
                        image: "vehicles/20251015/Corolla-LE-2026/colors/Ruby-Flare-Pearl-Color-.png"
                    },
                    {
                        name: "Classic Silver Metallic",
                        code: "#8a8889",
                        image: "vehicles/20251015/Corolla-LE-2026/colors/Classic-Silver-Mettalic.png"
                    },
                    {
                        name: "Midnight Black Metallic",
                        code: "#090909",
                        image: "vehicles/20251015/Corolla-LE-2026/colors/Midnight-Black-Metallic-Color.png"
                    },
                    {
                        name: "Underground",
                        code: "#383739",
                        image: "vehicles/20251015/Corolla-LE-2026/colors/Underground-Color.png"
                    },
                ],
                images: [
                    "vehicles/20251015/Corolla-LE-2026/features/Image-1.jpg",
                    "vehicles/20251015/Corolla-LE-2026/features/Image-2.jpg",
                    "vehicles/20251015/Corolla-LE-2026/features/Image-3.jpg",
                    "vehicles/20251015/Corolla-LE-2026/features/Image-4.jpg",
                    "vehicles/20251015/Corolla-LE-2026/features/Image-5.jpg",
                    "vehicles/20251015/Corolla-LE-2026/features/Image-6.jpg",
                    "vehicles/20251015/Corolla-LE-2026/features/Image-7.jpg",
                    "vehicles/20251015/Corolla-LE-2026/features/Image-8.jpg",
                    "vehicles/20251015/Corolla-LE-2026/features/Image-9.jpg",
                    "vehicles/20251015/Corolla-LE-2026/features/Image-10.jpg",
                    "vehicles/20251015/Corolla-LE-2026/features/Image-11.jpg",
                    "vehicles/20251015/Corolla-LE-2026/features/Image-12.jpg",
                ]
            },
            options: [
                {
                    category: "LAUNCH បរិបទយានយន្ត",
                    specs: [
                        { label: "Model ម៉ូដែល", value: "Toyota Corolla LE  2026" },
                        { label: "Announced ថ្ងៃប្រកាស", value: "2025" },
                        { label: "Status ថ្ងៃបរិច្ឆេទចេញលក់", value: "2025" },
                        { label: "Base Price តំលៃ", value: "$ 22,725 (FWD) តំលៃក្នុងទីផ្សារសហរដ្ឋអាមេរិក" },
                        { label: "Country ប្រទេស", value: "សហរដ្ឋអាមេរិក" },
                    ],
                },
                {
                    category: "Powertrain and Performance ប្រព័ន្ធចលនា និង សមត្ថភាព",
                    specs: [
                        { label: "Engine ម៉ាស៊ីន", value: "ម៉ាស៊ីន​ចំណុះ ២.០ លីត្រ ៤ ស៊ីឡាំង DOHC មាន ១៦ វ៉ាល់ ជាមួយ​ប្រព័ន្ធ Dual VVT-i (ប្រព័ន្ធ​​វ៉ាល់​ឆ្លាតវៃ) 2.0-liter 4-cylinder DOHC 16-valve with Dual Variable Valve Timing with intelligence (VVT-i)" },
                        { label: "Horsepower កំលាំងសេះ", value: "169ph @6600rpm" },
                        { label: "Torque កំលាំងបង្វិលជុំ", value: "204Nm @4400rpm" },
                        { label: "Electric Motors កំលាំងម៉ូទ័រអគ្គិសនី", value: "N/A" },
                        { label: "Battery អាគុយ", value: "N/A" },
                        { label: "Emission Rating កំរិតបំភាយឧស្ម័ន", value: "យានយន្ត​បញ្ចេញ​ផ្សែង​ពុល​ទាប​បំផុត (SULEV-30)" },
                        { label: "Transmission ប្រអប់លេខ", value: "ប្រអប់លេខអូតូ CVT ប្រភេទ Dynamic-Shift" },
                        { label: "Drivetrain ប្រព័ន្ធចលនា", value: "Front-Wheel Drive (FWD)" },
                        { label: "Suspension ប្រព័ន្ធជើងក្រោម", value: "ប្រព័ន្ធ​ជើងក្រោមខាងមុខ​​ប្រភេទ MacPherson Strut ជាមួយ​នឹង​ជើង​ទប់​លំនឹង; និង​ប្រព័ន្ធ​ជើងក្រោមខាង​ក្រោយ​ប្រភេទ Torsion Beam" },
                    ],
                },
                {
                    category: "Fuel Economy ការប្រើប្រាស់ប្រេងឥន្ធនៈ",
                    specs: [
                        { label: "FWD ( L/100km ) ប៉ុង១ (FWD)", value: "City 7.3 L/100km, Highway 5.7 L/100km" },
                        { label: "AWD (L/100km) ប៉ុង២(AWD)", value: "N/A" },
                        { label: "Chargine (AC) ការសាកថាមពល", value: "N/A" },
                        { label: "Fuel Tank Campacity ចំណុះធុងប្រេងឥន្ធនះ", value: "50Liter" },
                    ],
                },
                {
                    category: "Exterior and Dimension ផ្នែកខាងក្រៅ និង រង្វាស់ប្រវែង",
                    specs: [
                        { label: "Wheels ទំហំកង់(កង់យ៉ាន់)", value: "យ៉ាន់កង់ប្រភេទ​ដែក​ទំហំ ១៦ អ៊ីញ​ជាមួយ​គម្រប​កង់ និង​សំបក​កង់​ទំហំ P205/55R16 (16-in. steel wheels with covers and P205/55R16 tires)" },
                        { label: "Grille កាងមុខ", value: "កាងមុខពណ៌ខ្មៅ (Black front grille)" },
                        { label: "Length បណ្តោយ", value: "4635.5mm" },
                        { label: "Width ទទឹង", value: "1780.54mm" },
                        { label: "Hight កំពស់", value: "1435.1mm" },
                        { label: "Ground Clearance ប្រវែងគម្លាតពីដី", value: "134.62mm" },
                        { label: "Curb Weight ទម្ងន់", value: "1340.36kg" },
                        { label: "Wheelbase គម្លាតកង់មុខ និង កង់ក្រោយ", value: "2700.02mm" },
                        { label: "Towing Capacity ទំងន់ផ្ទុក ឬ សណ្តោង", value: "N/A" },
                        { label: "Track (Front/rear) រយៈចម្ងាយកង់មុខនិងក្រោយ", value: "ចន្លោះកង់មុខ 1531.62mm , ចន្លោះកង់ក្រោយ 1549.4mm" },
                        { label: "Other Standard Features មុខងារស្តង់ដារផ្សេងៗ", value: "ប្រព័ន្ធ​ជូត​កញ្ចក់​ដែល​ដំណើរការ​អាចកំណត់ដោយ​មាន​រយៈ​ពេលបាន (Intermittent windshield wipers)។" },
                        { label: "Other Standard Features មុខងារស្តង់ដារផ្សេងៗ", value: "អង់តែន​រូបរាង​ព្រុយ​ត្រីឆ្លាម​ដែល​បំពាក់​លើ​ដំបូល​រថយន្ត​មាន​ពណ៌​ស៊ីគ្នា​ជាមួយ​តួ​រថយន្ត (Color-keyed roof-mounted shark-fin antenna)" },
                        { label: "Other Standard Features មុខងារស្តង់ដារផ្សេងៗ", value: "ចង្កៀង​មុខ​ប្រភេទ LED (LED headlights)" },
                        { label: "Other Standard Features មុខងារស្តង់ដារផ្សេងៗ", value: "ភ្លើងបំភ្លឺពេលថ្ងៃប្រភេទ LED (DRL) (LED Daytime Running Lights (DRL) )" },
                        { label: "Other Standard Features មុខងារស្តង់ដារផ្សេងៗ", value: "ភ្លើង​ក្រោយ​ប្រភេទ LED និង​ភ្លើង​ហ្វ្រាំង​ប្រភេទ LED (LED taillights and stop lights )" },
                        { label: "Other Standard Features មុខងារស្តង់ដារផ្សេងៗ", value: "កញ្ចក់​ចំហៀងប៊ូតុង​បញ្ជា​ដោយថាមពល​អគ្គិសនី​មាន​ពណ៌​ស៊ីគ្នា​ជាមួយ​តួ​រថយន្ត (Color-keyed power outside mirrors)" },
                        { label: "Other Standard Features មុខងារស្តង់ដារផ្សេងៗ", value: "កញ្ចក់​ចំហៀង​មាន​ពណ៌​ស៊ីគ្នា​ជាមួយ​តួរថយន្ត មាន​មុខងារ​កម្ដៅ​និងប៊ូតុង​បញ្ជា​ដោយថាមពល​អគ្គិសនី ជាមួយ​សញ្ញា​ដាស់តឿន​ប្រព័ន្ធ​តាមដាន​ចំណុច​ខ្វះចន្លោះ (Blind Spot Monitor)" },
                        { label: "Other Standard Features មុខងារស្តង់ដារផ្សេងៗ", value: "ដៃទ្វារខាងក្រៅមានពណ៌ស៊ីគ្នាជាមួយតួរថយន្ត (Color-keyed outside door handles)។" },
                    ],
                },
                {
                    category: "Interior and Technology ផ្នែកខាងក្នុង និង បច្ចេកវិទ្យា",
                    specs: [
                        { label: "Seating ចំណុះផ្ទុកអ្នកដំណើរ", value: "ផ្ទុកបានចំនួន ៥នាក់។ កៅអី​អ្នក​បើកបរ​ស្រោប​ដោយ​ក្រណាត់​មានប៊ូតុងបញ្ជាបានមាន ៦មុខងារ និង​កៅអី​អ្នករួមដំណើរ​ខាងមុខ​មានប៊ូតុងបញ្ជា​បានមាន ៤ មុខងារ។" },
                        { label: "Infotainment Display ប្រព័ន្ធកម្សាន្ត និង ព័ត៌មាន", value: "អេក្រង់កំសាន្ត ប្រព័ន្ធ Toyota Audio Multimedia ទំហំ ៨ អ៊ីញ" },
                        { label: "Audio Multmedia ប្រព័ន្ធសម្លេង", value: "ប្រព័ន្ធសម្លេងចំនួន ៦ (6 speaker audio system), Apple CarPlay® & Android Auto™ ដោយឥតប្រើខ្សែ, និងការប្រើប្រាស់សេវា SiriusXM® សាកល្បងរយៈពេល ៣ ខែ។" },
                        { label: "Connectivity ប្រព័ន្ធតភ្ជាប់", value: "រន្ធសាកថ្ម USB-C ចំនួនពីរនៅខាងមុខ,រន្ធសាកថ្ម USB-C ចំនួនពីរនៅខាងក្រោយ" },
                        { label: "Charging Pad បន្ទះសាកថ្ម", value: "N/A" },
                        { label: "Climate Control ប្រព័ន្ធគ្រប់គ្រងស៊ីតណ្ហភាព", value: "ម៉ាស៊ីនត្រជាក់ស្វ័យប្រវត្តិ ជាមួយតម្រងខ្យល់កាត់បន្ថយធូលីនិងលំអងផ្កា និងប៊ូតុងបញ្ជា (push-button controls)" },
                        { label: "Driver Diplay អេក្រង់តាបឡូរ", value: "ផ្ទាំង​កុងទ័រ​ឌីជីថល​ទំហំ ៧ អ៊ីញ(7-in. digital gauge cluster )" },
                        { label: "Sterring Wheel ចង្កូត", value: "ចង្កូត​បញ្ជា​ដោយ​ប្រព័ន្ធ​អគ្គិសនី (EPS) ប្រព័ន្ធ​ Rack-and-Pinion ជំនួយ​ដោយ​ថាមពល" },
                        { label: "Drive Mode មុខងារបើកបរ", value: "Normal and Eco driving modes" },
                        { label: "Other Standard Features មុខងារស្តង់ដារផ្សេងៗ", value: "កៅអី​ក្រោយ​អាច​បត់​ចុះ​បាន​តាម​សមាមាត្រ ៦០% /៤០% ជាមួយ​ដៃ​ទ្រ​កណ្ដាល និង​កន្លែង​ដាក់​កែវ​ចំនួន​ពីរ" },
                        { label: "Other Standard Features មុខងារស្តង់ដារផ្សេងៗ", value: "ចង្កូតមាន ៣ កាំ អាចផ្អៀង/ទាញចេញ-ចូលបាន ជាមួយប៊ូតុងបញ្ជាសំឡេង, អេក្រង់ MID, ទូរស័ព្ទ Bluetooth® ឥតប្រើដៃ, បញ្ជាដោយសំឡេង, ប្រព័ន្ធ DRCC និងប្រព័ន្ធ LDA w/SA" },
                        { label: "Other Standard Features មុខងារស្តង់ដារផ្សេងៗ", value: "កញ្ចក់មើលក្រោយបន្សាបពន្លឺនៅពេលយប់/ថ្ងៃ (Day/night rearview mirror)" },
                        { label: "Other Standard Features មុខងារស្តង់ដារផ្សេងៗ", value: "កាមេរ៉ា​ថយ​ក្រោយ​ដែល​មាន​បង្កប់​ជាប់​នឹង​រថយន្ត ជាមួយ​ខ្សែ​បន្ទាត់​បង្ហាញ​ទិសដៅ (Integrated backup camera with projected path)។" },
                        { label: "Other Standard Features មុខងារស្តង់ដារផ្សេងៗ", value: "Center Console ជាមួយកន្លែងផ្ទុកឥវ៉ាន់ (Center console with storage compartment)" },
                        { label: "Other Standard Features មុខងារស្តង់ដារផ្សេងៗ", value: "នាឡិកា​ឌីជីថល (Digital clock )" },
                        { label: "Other Standard Features មុខងារស្តង់ដារផ្សេងៗ", value: "ប្រព័ន្ធ​បញ្ជា​ពី​ចម្ងាយ​ជាមួយមុខងារ​ច្រើន​ដែល​មាន​បង្កប់​ក្នុង​កូនសោរ​សម្រាប់​ចាក់សោរ, ដោះសោរ, បញ្ជា​សំឡេង​រោទិ៍ និង​បើក​គូទឡាន" },
                        { label: "Other Standard Features មុខងារស្តង់ដារផ្សេងៗ", value: "Overhead console with maplights" },
                        { label: "Other Standard Features មុខងារស្តង់ដារផ្សេងៗ", value: "មុខងារ​រលត់​ម៉ាស៊ីន​ដោយ​ស្វ័យប្រវត្តិ (Automatic Engine Shutoff)" },
                        { label: "Other Standard Features មុខងារស្តង់ដារផ្សេងៗ", value: "ប្រអប់​ដាក់​ឥវ៉ាន់​នៅ​ផ្នែក​ខាង​អ្នកដំណើរ (Passenger-side glove compartment)" },
                        { label: "Other Standard Features មុខងារស្តង់ដារផ្សេងៗ", value: "កន្លែង​ដាក់​កែវ​ចំនួន​ពីរ​នៅ​ខាងមុខ (Two front cup holders), កន្លែង​ដាក់​កែវ​ចំនួន​ពីរ​នៅ​ខាងក្រោយ (Two rear cup holders)" },
                        { label: "Other Standard Features មុខងារស្តង់ដារផ្សេងៗ", value: "ហោប៉ៅ​ដាក់​ឥវ៉ាន់​នៅ​ទ្វារ​មុខ​និងទ្វារ​ក្រោយ (Front- and rear-door storage pockets)" },
                        { label: "Other Standard Features មុខងារស្តង់ដារផ្សេងៗ", value: "ប្រព័ន្ធ​កម្ដៅ​រំលាយ​អ័ព្ទ​កញ្ចក់​ក្រោយ​ជាមួយ​កម្មវិធី​កំណត់​ពេលវេលា (Timer) (Rear window defogger with timer)" },
                        { label: "Other Standard Features មុខងារស្តង់ដារផ្សេងៗ", value: "កញ្ចក់​ទ្វារ​មុខ​និង​ក្រោយអាច​បើកបិទ​បញ្ជារដោយថាមពល​អគ្គិសនី​ជាមួយ​មុខងារ​បើក/បិទ​ស្វ័យប្រវត្តិ​ដោយ​គ្រាន់តែ​ប៉ះ​ម្តង" },
                        { label: "Other Standard Features មុខងារស្តង់ដារផ្សេងៗ", value: "សោរទ្វារ​អគ្គិសនី​ជាមួយ​មុខងារ​ចាក់សោរ​ស្វ័យប្រវត្តិ (Power door locks with automatic locking feature)" },
                        { label: "Other Standard Features មុខងារស្តង់ដារផ្សេងៗ", value: "រន្ធ​ដោត​ថាមពល​ជំនួយ ១២V ចំនួន​មួយ (One 12V auxiliary power outlet)" },
                    ],
                },
                {
                    category: "Safety and Driver assistance សុវត្ថិភាព និង ប្រព័ន្ធជំនួយអ្នកបើកបរ",
                    specs: [
                        { label: "Toyota Safety Sense™ 3.0 ប្រព័ន្ធសុវត្ថិភាពរថយន្តតូយ៉ូតា", value: "TSS3.0" },
                        { label: "Toyota Safety Sense™ 3.0 ប្រព័ន្ធសុវត្ថិភាពរថយន្តតូយ៉ូតា", value: "ប្រព័ន្ធសុវត្ថិភាពទប់ស្កាត់ការបុកទង្គិច ជាមួយមុខងារចាប់សញ្ញាអ្នកថ្មើរជើង (PCS w/PD)(Pedestrian Detection (PCS w/PD))" },
                        { label: "Toyota Safety Sense™ 3.0 ប្រព័ន្ធសុវត្ថិភាពរថយន្តតូយ៉ូតា", value: "ប្រព័ន្ធជំនួយការបើកបរក្នុងគន្លងផ្លូវ (LTA)(Lane Tracing Assist (LTA))" },
                        { label: "Toyota Safety Sense™ 3.0 ប្រព័ន្ធសុវត្ថិភាពរថយន្តតូយ៉ូតា", value: "ប្រព័ន្ធគ្រប់គ្រងល្បឿនថេរតាមរ៉ាដាគ្រប់ល្បឿន (DRCC) (Dynamic Radar Cruise Control (DRCC))" },
                        { label: "Toyota Safety Sense™ 3.0 ប្រព័ន្ធសុវត្ថិភាពរថយន្តតូយ៉ូតា", value: "ប្រព័ន្ធដាស់តឿននៅពេលចាកចេញពីគន្លងផ្លូវ ជាមួយមុខងារជំនួយចង្កូត (LDA w/SA)(Alert with Steering Assist (LDA w/SA))" },
                        { label: "Toyota Safety Sense™ 3.0 ប្រព័ន្ធសុវត្ថិភាពរថយន្តតូយ៉ូតា", value: "មុខងារបំភ្លឺភ្លើងហ្វារដោយស្វ័យប្រវត្តិ (AHB) ((Automatic High Beams (AHB))" },
                        { label: "Toyota Safety Sense™ 3.0 ប្រព័ន្ធសុវត្ថិភាពរថយន្តតូយ៉ូតា", value: "ប្រព័ន្ធចាប់សញ្ញាផ្លាកសញ្ញាចរាចរណ៍ (RSA)  (Road Sign Assist (RSA))" },
                        { label: "Toyota Safety Sense™ 3.0 ប្រព័ន្ធសុវត្ថិភាពរថយន្តតូយ៉ូតា", value: "ប្រព័ន្ធ​ត្រួតពិនិត្យ​សម្ពាធ​កង់​រថយន្ត (TPMS)" },
                        { label: "Toyota Safety Sense™ 3.0 ប្រព័ន្ធសុវត្ថិភាពរថយន្តតូយ៉ូតា", value: "ប្រព័ន្ធ​តាមដាន​ចំណុច​ខ្វះ​ចន្លោះ (BSM) ជាមួយ​មុខងារ​ដាស់តឿន​ចរាចរណ៍​ពេល​ថយ​ក្រោយ (RCTA)។" },
                        { label: "Additional Safety Features មុខងារបន្ថែមសុវត្ថិភាពផ្សេងៗ", value: "Crumple Zone មុខ​និង​ក្រោយ​ស្រូប​យក​កម្លាំង​បុក​ជាមួយ​ធ្នឹម​ការពារ​ទ្វារ​ពេល​បុក​ពី​ចំហៀង (Front and rear energy-absorbing crumple zones with side-impact door beams)" },
                        { label: "Additional Safety Features មុខងារបន្ថែមសុវត្ថិភាពផ្សេងៗ", value: "កៅអី​អ្នកបើកបរ​និង​អ្នករួមដំណើរ​មុខ​ដែល​មាន​មុខងារ​កាត់បន្ថយ​ការ​រងរបួស​ក (Whiplash)(Driver and front passenger Whiplash-Injury-Lessening (WIL))" },
                        { label: "Additional Safety Features មុខងារបន្ថែមសុវត្ថិភាពផ្សេងៗ", value: "បន្ទះ​តួរថយន្ត​ធ្វើ​ពី​ដែកថែប​រឹងមាំ​កម្រិត​ខ្ពស់ (High-tensile-strength steel body panels )" },
                        { label: "Additional Safety Features មុខងារបន្ថែមសុវត្ថិភាពផ្សេងៗ", value: "ពោង​សុវត្ថិភាព​ចំនួន ១០ — រួម​មាន​ប្រព័ន្ធ​ពោង​សុវត្ថិភាព​ទំនើប​សម្រាប់​អ្នកបើកបរ​និង​អ្នករួមដំណើរ​ខាងមុខ​, ពោង​សុវត្ថិភាព​ចំហៀង​ដែល​បំពាក់​នៅ​លើ​" },
                        { label: "Additional Safety Features មុខងារបន្ថែមសុវត្ថិភាពផ្សេងៗ", value: "កៅអី​អ្នកបើកបរ​និង​អ្នករួមដំណើរខាង​មុខ​, ពោង​សុវត្ថិភាព​ត្រង់​ជង្គង់​អ្នកបើកបរ​, ពោង​សុវត្ថិភាព​ក្រោម​កៅអី​អ្នករួមដំណើរ​, ពោង​សុវត្ថិភាព​ចំហៀង​នៅ​កៅអី​ក្រោយ​, " },
                        { label: "Additional Safety Features មុខងារបន្ថែមសុវត្ថិភាពផ្សេងៗ", value: "និង​ពោង​សុវត្ថិភាព​លើតំបូលរថយន្តសំរាប់​ខាងមុខ​និង​ក្រោយ។" },
                        { label: "Additional Safety Features មុខងារបន្ថែមសុវត្ថិភាពផ្សេងៗ", value: "ចង្កូត​ដែលអាច​ស្រូប​កម្លាំង​បុក​និង​បាក់​ចូល​បាន (Energy-absorbing collapsible steering column)" },
                        { label: "Additional Safety Features មុខងារបន្ថែមសុវត្ថិភាពផ្សេងៗ", value: "LATCH (Lower Anchor និងទំពក់សម្រាប់កុមារ) រួមមាន Lower Anchor នៅលើកៅអីក្រោយផ្នែកចំហៀង និងទំពក់ភ្ជាប់នៅលើកៅអីក្រោយទាំងអស់។" },
                        { label: "Additional Safety Features មុខងារបន្ថែមសុវត្ថិភាពផ្សេងៗ", value: "ឧបករណ៏ខាងផ្ទៃខាងក្នុងមួយចំនួនផលិតឡើងដើម្បីកាត់បន្ថយនិង ​ការពារ​ក្បាល​ពី​ការ​បុក​ទង្គិច (Head-impact protection structure)" },
                        { label: "Additional Safety Features មុខងារបន្ថែមសុវត្ថិភាពផ្សេងៗ", value: "ហ្វ្រាំងដៃ​អគ្គិសនី (EPB) ឬ ហ្វ្រាំង​ចត​រថយន្ត​អគ្គិសនី (Electric Parking Brake (EPB) )" },
                        { label: "Additional Safety Features មុខងារបន្ថែមសុវត្ថិភាពផ្សេងៗ", value: "ឧបករណ៍​ចុចបញ្ជាកម្ពស់​ខ្សែ​ក្រវាត់​ស្មា​ខាងមុខ, ប្រព័ន្ធ​រឹត​ខ្សែ​ក្រវាត់​សុវត្ថិភាព​សម្រាប់​អ្នកបើកបរ​និង​អ្នករួមដំណើរ​មុខ​ជាមួយ​មុខងារ​កំណត់​កម្លាំង។" },
                        { label: "Additional Safety Features មុខងារបន្ថែមសុវត្ថិភាពផ្សេងៗ", value: "ខ្សែ​ក្រវាត់​សុវត្ថិភាព 3 Point សម្រាប់​កៅអី​ទាំង​អស់; និង​មុខងារ​រឹត​ខ្សែ​ក្រវាត់​ដោយ​ស្វ័យប្រវត្តិ (ELR) នៅ​លើ​ផ្នែក​អ្នកបើកបរ" },
                        { label: "Additional Safety Features មុខងារបន្ថែមសុវត្ថិភាពផ្សេងៗ", value: "​ទ្វារ​ក្រោយមាន Locks សុវត្ថិភាព​ការពារ​កុមារ (Child-protector rear door locks)។" },
                        { label: "Additional Safety Features មុខងារបន្ថែមសុវត្ថិភាពផ្សេងៗ", value: "ប្រព័ន្ធ​រារាំង​ម៉ាស៊ីន​មិន​ឱ្យ​ដំណើរការ (Engine immobilizer)" },
                        { label: "Additional Safety Features មុខងារបន្ថែមសុវត្ថិភាពផ្សេងៗ", value: "ប្រព័ន្ធ​ជំនួយ​ការ​ចេញ​ដំណើរ​ឡើង​ចំណោត (HAC)" },
                    ],
                },
            ],
        },
    };

    const carData = getCarData[model];

    return (
        <main className="main">
            <Navbar />
            <div className="main__container">
                <Sidebar />
                <div className="content">
                    <Hero
                        type='featured-image'
                        alt={selectedColor.name || carData.name}
                        src={`${cdnUrl}/${selectedColor.image || carData.image}`} />

                    {activeTab === 'pictures' && <div className="color-buttons-wrapper">
                        {carData.features.colors.map((color) => {
                            return (
                                <button
                                    key={color.name}
                                    onClick={() => setSelectedColor(color)}
                                    className={`color-button ${selectedColor.name === color.name ? 'selected' : ''}`}
                                    style={{ backgroundColor: color.code }}
                                    aria-label={color.name}
                                    title={color.name}
                                >
                                    {selectedColor.name === color.name && (
                                        <span className="checkmark">
                                            <svg
                                                fill="none"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="3"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </span>
                                    )}
                                </button>
                            )
                        })}
                    </div>}
                    <div className="car-model">
                        <div className="tabs">
                            <ul className="tab-menu">
                                <li id="opinions" className={activeTab === 'opinions' ? 'active' : ''} data-tab="opinions" onClick={() => handleTabClick('opinions')}><FontAwesomeIcon icon={faComment} />Opinions</li>
                                <li>
                                    <Link
                                        href={`/compare?make=${maker}&market_region=${market_region}&model=${model}`}
                                    >
                                        <FontAwesomeIcon icon={faCubes} />Compare
                                    </Link>
                                </li>
                                <li
                                    id="pictures"
                                    className={activeTab === 'pictures' ? 'active' : ''}
                                    data-tab="pictures"
                                    onClick={() => handleTabClick('pictures')}
                                ><FontAwesomeIcon icon={faImage} />Pictures</li>
                            </ul>

                            <div className={`tab-content tab-content-options ${activeTab === 'opinions' ? 'active' : ''}`} id="opinions">
                                <div className="compare">
                                    {carData.options.map((group) => {
                                        const groupedSpecs = groupSpecsByLabel(group.specs);

                                        return (
                                            <div key={group.category} className="compare__features">
                                                {groupedSpecs.map((spec, index) => {
                                                    const validValues = spec.values.filter(Boolean);
                                                    return (
                                                        <div key={index} className="feature-row">
                                                            <div className="feature-col-title feature-label">
                                                                {index === 0 && <strong>{group.category}</strong>}
                                                            </div>
                                                            <div className="feature-col">
                                                                <strong>{spec.label}</strong>
                                                            </div>
                                                            <div className="feature-col">
                                                                {validValues.length === 0 && <span className="text-muted">-</span>}

                                                                {validValues.length === 1 && <span>{validValues[0]}</span>}

                                                                {validValues.length > 1 && (
                                                                    <ul className="feature-values">
                                                                        {validValues.map((val, i) => (
                                                                            <li key={i}>{val}</li>
                                                                        ))}
                                                                    </ul>
                                                                )}
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>

                            <div className={`tab-content ${activeTab === 'pictures' ? 'active' : ''}`} id="pictures">
                                <div className="car-list-container">
                                    <div className="list">
                                        {carData.features.images.map((path, index) => (
                                            <div key={index} className="list-item">
                                                <img src={`${cdnUrl}/${path}`} alt="Car 1" />
                                            </div>
                                        ))}
                                    </div>

                                    <aside className="ads">
                                        <div className="ad-box">Advertisement</div>
                                    </aside>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </main >
    );
}
