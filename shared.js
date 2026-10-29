// LANGUAGE TRANSLATION
const translations = {
    // I. SHARED
    // 1. Navbar/Header (including Hamburger)
    home: { vi: "TRANG CHỦ", en: "HOME" },
    company_information: { vi: "CÔNG TY", en: "COMPANY" },
    products: { vi: "SẢN PHẨM", en: "PRODUCTS" },
    projects: { vi: "DỰ ÁN", en: "PROJECTS"},
    contact: { vi: "LIÊN HỆ", en: "CONTACT US" },
    
    // 2. Header Items 
    // a. Company
    aboutus: {vi: "Về VINA LPG", en: "About VINA LPG"},

    // b. Products
    fillingsys: { vi: "Hệ thống nạp", en: "Filling Systems" },
    fillingcaro: { vi: "Máy nạp xoay tròn", en: "Filling Carousel" },
    standalonefm: { vi: "Standalone FM", en: "Standalone FM" },

    compressors: { vi: "Máy nén", en: "Compressors" },
    pumps: { vi: "Máy bơm", en: "Pumps" },
    valves: { vi: "Van", en: "Valves" },
    tankm: { vi: "Đo lường bể chứa", en: "Tank Measurement" },
    vapor: { vi: "Máy hóa hơi", en: "Vaporisers" },
    meter: { vi: "Hệ thống đo lường", en: "Meter" },
    lah: { vi: "Ống dẫn cần nạp", en: "Loading Arm Hoses" },

    // c. Projects
    customer_partner: { vi: "Khách hàng & đối tác", en: "Our Customers & Partners" },
    coreprojects: { vi: "Dự án", en: "Projects" },

    // 3. Search Bar 
    search_placeholder: { vi: "Tìm kiếm...", en: "Search..." },
    search_placeholder_overlay: { vi: "Gõ bất cứ thứ gì ở đây...", en: "Type anything here..." },

    // 4. Footer 
    // a. Main
    footer_text: { vi: "Cung cấp các giải pháp LPG và LNG chất lượng hàng đầu từ năm 2000.", en: "Providing top-notch LPG and LNG solutions since 2000." },
    
    // b. Quick Links
    quick_links: { vi: "LIÊN KẾT NHANH", en: "QUICK LINKS" },
    products_footer: { vi: "Sản phẩm", en: "Products" },
    tos: { vi: "Điều khoản dịch vụ", en: "Terms of Service" },


    // c. Contact
    contact_footer: { vi: "LIÊN HỆ", en: "CONTACT" },
    address: { vi: "Tầng 2, 181 Đường Cao Thắng, Phường Hòa Hưng, Quận 10, TP. Hồ Chí Minh", en: "Floor 2, 181 Cao Thang Street, Hoa Hung Ward, District 10, Ho Chi Minh City" },
    hours: { vi: "9:00-17:00 UTC+7", en: "9AM-5PM UTC+7" },
    business_days: {vi: "T2-T6:", en: "Mon-Fri:"},
    holidays: {vi: "T7, CN, Ngày lễ:", en: "Sat, Sun, Holidays:"},
    hours_closed: {vi: "Đóng cửa", en: "Closed"},


    // 5. Hamburger-specific
    follow_us: { vi: "THEO DÕI CHÚNG TÔI", en: "FOLLOW US" },

    // II. INDEX
    // 1. Hero 
    title: { vi: "VINA LPG", en: "VINA LPG" },
    title_other: { vi: "CO.,LTD", en: "CO.,LTD" },
    hero_text: { vi: "Cung cấp mọi công trình khí LPG - NG - CNG - SNG.", en: "Providing total solutions for LPG - NG - CNG - SNG." },

    //2. Quote
    quote: { vi: "Chúng tôi cung cấp giải pháp toàn diện cho các yêu cầu về kho cảng LPG và hệ thống khí đốt.", en: "We provide total solution to gas terminal and plant requirement." },
    subquote: { vi: "Với hơn 25 năm kinh nghiệm trong xây dựng nhà máy đóng chai khí hóa lỏng (LPG), bao gồm cả các dự án trọn gói hoặc cung cấp, lắp đặt và vận hành toàn bộ thiết bị nhà máy.", en: "More than 25 years experience in building of LPG bottling plant, including total turnkey project or supply, installation and commission of complete plant equipment." },


    // 3. Partners
    our_customers: { vi:"Khách hàng", en:"Our Customers"},
    our_partners: { vi: "Đối tác", en: "Our Partners" },

    // 4. What we offer 
    // a. Text
    images_title: { vi: "What we offer", en: "What we offer" },
    images_text: { vi: "Chúng tôi tin tưởng phục vụ khách hàng từ một thiết bị đơn lẻ đến toàn bộ thiết bị nhà máy.", en: "We believe in serving our customer from one item to a complete plant equipment." },

    //b. Map
    map_1: { vi: "Máy nén khí cho tàu thủy", en: "Compressor for Ship" },
    map_2: { vi: "Máy nén khí cho tàu thủy", en: "Compressor for Ship" },
    map_3: { vi: "Hệ thống đo mức bồn chứa", en: "Tank Gauging System" },
    map_4: { vi: "Đồng hồ đo lưu lượng Coriolis", en: "Coriolis Meter" },
    map_5: { vi: "Cần nạp LPG", en: "LPG Loading Arm" },
    map_6: { vi: "Máy nạp xoay tròn", en: "Filling Carousel" },
    map_7: { vi: "Máy nạp LPG", en: "LPG Filling Machine" },
    map_8: { vi: "Hệ thống phát hiện khí", en: "Gas Detector System" },
    map_9: { vi: "Đồng hồ đo LPG", en: "LPG Bobtail Meter" },
    map_10: { vi: "Máy bơm xả hàng (xe tải)", en: "Truck Pump for Unloading" },
    map_11: { vi: "Máy bơm Coro Flow (xe hơi)", en: "Coro Flow Pump for Vehicle" },
    map_12: { vi: "Máy phân phối LPG", en: "LPG Dispenser" },
    map_13: { vi: "Máy bơm SC cho máy nạp xoay tròn", en: "SC Pump for Filling Carousel" },
    map_14: { vi: "Van ống dẫn", en: "Pipeline Valves" },
    map_15: { vi: "Khung máy nén", en: "Compressor Skid" },
    map_16: { vi: "Máy bơm Coro-Vane", en: "Coro-Vane Pump" },
    map_17: { vi: "Máy hóa hơi", en: "Vaporizer" },
    map_18: { vi: "Máy nén khí (tàu thủy)", en: "Compressor for Ship" },
    map_19: { vi: "Van an toàn", en: "Safety Relief Valve" },
    map_20: { vi: "Van an toàn", en: "Safety Relief Valve" },


    // c. More Text
    offer_1: { vi: "Hệ thống băng chuyền chiết nạp LPG cho nhà máy đóng chai", en: "LPG Filling Carousel for Bottling Plant" },
    offer_2: { vi: "Máy bơm và máy nén cho LPG/NH₃", en: "Pumps and Compressors for LPG/NH₃" },
    offer_3: { vi: "Thiết bị bồn chứa", en: "Tank Accessories" },
    offer_4: { vi: "Van đường ống", en: "Pipeline Valves" },
    offer_5: { vi: "Máy hóa hơi, Máy trộn SNG", en: "Vaporizer, SNG Mixer" },
    offer_6: { vi: "Van LNG, Máy bơm và Máy nén", en: "LNG Valves, Pumps and Compressors" },
    offer_7: { vi: "Máy bơm đa tầng", en: "Side Channel Pump" },
    offer_8: { vi: "Dịch vụ hút chân không bồn chứa LPG, Propylene", en: "LPG, Propylene Tank Evacuation Service" },
    offer_9: { vi: "Máy nén gas, hệ thống van trên tàu thủy", en: "Compressor, Marine Valves on ships" },
    offer_10: { vi: "Cần xuất LPG", en: "LPG Loading Arm" },
    offer_11: { vi: "Đồng hồ đo lưu lượng", en: "Gas Meters" },
    offer_12: { vi: "Hệ thống đo mức bồn chứa", en: "Tank Gauging System" },
    // III. ABOUTUS
    // 1. About Us
    about_title: { vi: "Về Chúng Tôi", en: "About Us" },
    about_subtitle: { vi: "Hơn 25 năm kinh nghiệm...", en: "Over 25 years of experience..." },
    about_text: { vi: "VINA LPG chuyên tư vấn, cung cấp và lắp đặt thiết bị & máy móc cho ngành công nghiệp khí hóa lỏng (LPG) và khí tự nhiên (NG) cho các dự án khí đốt, bao gồm: kho chứa, tàu chở LPG, nhà máy chiết nạp LPG, trạm biến áp NG cho nhà máy điện và các cơ sở công nghiệp, v.v.", en: "VINA LPG specializes in consulting, supplying, and installing equipment & machinery for LPG (Liquified Petroleum Gas) and NG (Natural Gas) industries for gas projects including: storage facilities, LPG vessels, LPG filling plants, NG substations for power plants and industrial facilities, etc." },
    about_text_2: { vi: "Với sự hợp tác cùng các chuyên gia từ Mỹ, Ý, Đức và Singapore, Vina LPG còn cung cấp dịch vụ tư vấn, thiết kế, lắp đặt, đưa vào vận hành các công trình:", en: "In collaboration with experts from the USA, Italy, Germany, and Singapore, Vina LPG also provides consulting, design, installation, and commissioning services for projects:" },
    
    about_service_1: { vi: "Chế tạo, lắp đặt bồn cầu (Spherical Tank) đến 2.500 tấn", en: "Installation of spherical tanks up to 2,500 tons" },
    about_service_2: { vi: "Xây dựng nhà máy nạp LPG với hệ thông băng chuyền tự động và bán tự động", en: "Construction of LPG filling plants with automatic and semi-automatic conveyor systems" },
    about_service_3: { vi: "Chế tạo, lắp đặt các trạm: Hạ áp (Gas Pressure Reducing Station), xử lý khí (Treatment), đo lường (Metering), điều khiển (Control) và phân phối khí tự nhiên", en: "Design and installation of gas pressure reducing, treatment, metering, and control systems" },
   
    about_title_2: { vi: "Chúng tôi chỉ cung cấp các sản phẩm chất lượng cao.", en: "We focus on high Quality Products." },
    about_text_3: { vi: "VINA LPG chỉ cung cấp các sản phẩm chất lượng cao, bởi vì chúng tôi tin rằng chất lượng mang lại giá trị, sự ổn định, uy tín, sự thịnh vượng cho khách hàng và củng cố danh tiếng của chúng tôi.", en: "VINA LPG only provide high quality products, because we believe quality brings value, stability, credibility, prosperity of our customers and strengthens our reputation." },
   
    // b. Manufacturers
    about_title_3: { vi: "Các nhà cung cấp của chúng tôi", en: "Our Suppliers" },
    about_text_4: { vi: "Tại Việt Nam, VINA LPG là đại diện chinh thức của các nhà chế tạo:", en: "In Vietnam, VINA LPG is proud to be the distributor of the following manufacturers:" },
    m1: {vi:"Nhà sản xuất hàng đầu các loại bơm và máy nén khí LPG, Amoniac, CO₂, chất làm lạnh, nhiên liệu tinh chế, aerosol và dung môi công nghiệp.", en:"Leading manufacturer of LPG, Ammonia, CO₂, refrigerant, refined fuel, aerosol, and industrial solvent pumps and compressors."},
    m2: {vi:"Nhà sản xuất hàng đầu thế giới về hệ thống chiết nạp LPG: băng tải xoay, máy chiết nạp ga điện tử tự động, máy cân điện tử, máy kiểm tra rò rỉ, máy niêm phong, v.v.", en:"World's leading manufacturer of LPG filling systems: carousel conveyors, automatic electronic gas filling machines, electronic weighing machines, leak testing machines, sealing machines, etc."},
    m3: {vi:"Nhà sản xuất hàng đầu thế giới về van, bộ điều áp và thiết bị điều khiển, đặc biệt dành cho ngành công nghiệp khí hóa lỏng (LPG), khí cacbonat (NH₃) và khí công nghiệp/khí lạnh.", en:"Premier global manufacturer of specialty valves, regulators, and control equipment, particularly for LPG, NH₃ and cryogenic/industrial gas industry."},
    m4: {vi:"Là nhà sản xuất toàn diện các loại van chất lượng cao cho LPG và LNG. Sản phẩm bao gồm nhiều loại van LPG và LNG cho bể chứa, hệ thống đường ống, tàu LPG và vận chuyển.", en:"Is a comprehensive manufacturer of high quality valves for LPG and LNG. Products include various types of LPG and LNG process valves for storage tanks, piping system, LPG vessels and transportation."},
    m5: { vi: "Sero là nhà sản xuất hàng đầu thế giới về bơm đa tầng cho LPG và nhiều ứng dụng khác nhau trong ngành dầu khí.", en: "Sero is the world's foremost manufacturer of side channel pumps for LPG and various applications in oil & gas industry." },
    m6: { vi: "Nhà sản xuất hàng đầu các thiết bị hóa hơi LPG/NH₃ và máy trộn SNG tại Nhật Bản.", en: "Leading manufacturer of LPG/NH₃ vaporizers, and SNG mixers in Japan." },
    m7: { vi: "Công ty chuyên về các dự án nhà máy chiết nạp khí LPG cho bình gas dân dụng và công nghiệp. Siraga thiết kế, sản xuất và lắp đặt thiết bị cho các nhà máy chiết nạp, sản xuất và tân trang bình gas LPG.", en: "Specializes in filling plant projects for LPG cylinders for domestic and industrial use. Siraga designs, manufactures and installs equipment for LPG gas cylinder filling, manufacturing and refurbishing plants." },
    m8: { vi: "Thương hiệu hàng đầu thế giới về đồng hồ đo lưu lượng kiểu PD (positive displacement) với độ chính xác cao và hệ thống ghi nhận điện tử, được sử dụng trong các ứng dụng đo lường thương mại (custody transfer)", en: "Premier global brand for high-precision positive displacement flow meters and electronic registration systems, used in custody transfer applications." },

    // IV. BREADCRUMB
    // a. Others
    bc_home: { vi: "Trang chủ", en: "Home" },
    bc_company: { vi: "Công ty", en: "Company" },
    bc_contact: { vi: "Liên hệ", en: "Contact" },
    bc_products: { vi: "Sản phẩm", en: "Products" },
    bc_projects: { vi:"Dự án", en:"Projects"},
    bc_cuspar: { vi: "Khách hàng & Đối tác", en: "Customers & Partners" },
    bc_productnum: { vi: "sản phẩm", en: "products" },

    // b. Products
    bc_accessories: { vi: "Phụ kiện", en: "Accessories" },
    bc_compressors: { vi: "Máy nén", en: "Compressors" },
    bc_lpgfill: { vi: "Hệ thống nạp LPG", en: "LPG Filling Systems" },
    bc_filling: { vi: "Hệ thống nạp", en: "Filling Systems" },

    // V. CONTACT
    getintouch: { vi: "Liên hệ", en: "Get in Touch" },
    phone: { vi: "SDT", en: "Phone" },
    email: { vi: "Email", en: "Email" },
    address_title: { vi: "Địa chỉ", en: "Address" },
    address_text: { vi: "Tầng 2, 181 Đường Cao Thắng, Phường Hòa Hưng, Quận 10, TP. Hồ Chí Minh", en: "Floor 2, 181 Cao Thang Street, Hoa Hung Ward, District 10, Ho Chi Minh City", en: "Floor 2, 181 Cao Thang Street, Hoa Hung Ward, District 10, Ho Chi Minh City" },

    // VI. PROJECTS
    // 1. CusPar
    cuspar_title: {vi: "Khách hàng và Đối tác", en:"Our Customers & Partners"},
    cuspar_text: {vi: "VINA LPG hợp tác với các nhà sản xuất quốc tế uy tín và phục vụ các công ty khí đốt hàng đầu trên khắp Việt Nam.", en:"VINA LPG works with trusted international manufacturers and serves leading gas companies across Vietnam."},

    // 2. Core Projects — Section headers
    core_projects:     { vi: "Dự án của chúng tôi", en: "Our Projects" },
    core_projects_sub: { vi: "Các dự án VINA LPG đã thực hiện:", en: "Projects carried out by VINA LPG:" },

    // 3. LPG Bottling Filling Plant
    proj_fill_kc_turnkey_1200: { vi: "Dự án turnkey nhà máy chiết nạp LPG 1200 cyl/hr, Kosan Crisplant.", en: "Turnkey LPG filling plant project, 1200 cyl/hr, Kosan Crisplant." },
    proj_fill_kc_turnkey_800:  { vi: "Dự án turnkey nhà máy chiết nạp LPG 800 cyl/hr, Kosan Crisplant.",  en: "Turnkey LPG filling plant project, 800 cyl/hr, Kosan Crisplant." },
    proj_fill_kc_1200: { vi: "Cung cấp, lắp đặt, đưa vào vận hành băng chuyền carousel Kosan Crisplant nhà máy chiết nạp LPG 1200 cyl/hr.", en: "Supply, installation, and commissioning of Kosan Crisplant carousel conveyor for 1200 cyl/hr LPG filling plant." },
    proj_fill_kc_800:  { vi: "Cung cấp, lắp đặt, đưa vào vận hành băng chuyền carousel Kosan Crisplant nhà máy chiết nạp LPG 800 cyl/hr.",  en: "Supply, installation, and commissioning of Kosan Crisplant carousel conveyor for 800 cyl/hr LPG filling plant." },
    proj_fill_kc_600:  { vi: "Cung cấp, lắp đặt, đưa vào vận hành băng chuyền carousel Kosan Crisplant nhà máy chiết nạp LPG 600 cyl/hr.",  en: "Supply, installation, and commissioning of Kosan Crisplant carousel conveyor for 600 cyl/hr LPG filling plant." },
    proj_fill_kc_1000: { vi: "Cung cấp, lắp đặt, đưa vào vận hành băng chuyền carousel Kosan Crisplant nhà máy chiết nạp LPG 1000 cyl/hr.", en: "Supply, installation, and commissioning of Kosan Crisplant carousel conveyor for 1000 cyl/hr LPG filling plant." },
    proj_fill_kc_auto:  { vi: "Cung cấp thiết bị Kosan Crisplant hệ thống chiết nạp tự động.", en: "Supply of Kosan Crisplant equipment for automatic filling system." },
    proj_fill_kc_combo: { vi: "Cung cấp, lắp đặt, đưa vào vận hành tổ hợp chiết nạp Kosan Crisplant.", en: "Supply, installation, and commissioning of Kosan Crisplant filling assembly." },
    proj_fill_siraga_1200:         { vi: "Cung cấp, lắp đặt, đưa vào vận hành băng chuyền carousel Siraga nhà máy chiết nạp LPG 1200 cyl/hr.", en: "Supply, installation, and commissioning of Siraga carousel conveyor for 1200 cyl/hr LPG filling plant." },
    proj_fill_siraga_700:          { vi: "Cung cấp, lắp đặt, đưa vào vận hành băng chuyền carousel Siraga nhà máy chiết nạp LPG 700 cyl/hr.",  en: "Supply, installation, and commissioning of Siraga carousel conveyor for 700 cyl/hr LPG filling plant." },
    proj_fill_siraga_upgrade_800:  { vi: "Cung cấp thiết bị, nâng cấp hệ thống chiết nạp carousel Siraga nhà máy chiết nạp 800 cyl/hr.",  en: "Equipment supply and upgrade of Siraga carousel filling system for 800 cyl/hr filling plant." },
    proj_fill_siraga_upgrade_2400: { vi: "Cung cấp thiết bị, nâng cấp hệ thống chiết nạp carousel Siraga nhà máy chiết nạp 2400 cyl/hr.", en: "Equipment supply and upgrade of Siraga carousel filling system for 2400 cyl/hr filling plant." },
    proj_in_progress: { vi: "Đang thực hiện", en: "In Progress" },

    // 4. LPG Pump & Compressor Stations
    proj_pump_800ton:   { vi: "Cung cấp, lăp đặt, đưa vào vận hành trạm bơm và máy nén LPG, kho cảng LPG 800 tấn.",  en: "Supply, installation, and commissioning of LPG pump and compressor station, 800-ton LPG terminal." },
    proj_pump_1200ton:  { vi: "Nhà bơm, nén LPG 1200 tấn.", en: "LPG pump and compressor station, 1200 tons." },
    proj_pump_1500ton:  { vi: "Cung cấp, lăp đặt, đưa vào vận hành trạm bơm và máy nén LPG, tổng kho 1500 tấn.", en: "Supply, installation, and commissioning of LPG pump and compressor station, 1500-ton general warehouse." },
    proj_pump_ducgiang: { vi: "Trạm bơm nén LPG, kho ga Đức Giang, Hà Nội.", en: "LPG pump and compressor station, Duc Giang gas storage, Hanoi." },

    // 5. Valve Systems for LPG Terminals
    proj_valve_corken_compressor: { vi: "Trạm máy nén Corken, Total Gas Gò Dầu.",                               en: "Corken compressor station, Total Gas Go Dau." },
    proj_valve_corken_pump:       { vi: "Trạm bơm Corken, Kho gas cảng Dung Quất, Quảng Ngãi.",                 en: "Corken pump station, Dung Quat port gas storage, Quang Ngai." },
    proj_valve_pipeline_1200:     { vi: "Cung cấp hệ thống van đường ống, kho cảng LPG 1200 tấn.",              en: "Supply of pipeline valve system for 1200-ton LPG terminal." },
    proj_valve_pipeline:          { vi: "Cung cấp máy bơm và máy nén, hệ thống van tuyến ống kho cảng LPG.",    en: "Supply of pumps and compressors, pipeline valve system for LPG terminal." },
    proj_valve_pump_arm:          { vi: "Cung cấp cụm bơm và cần xuất nạp LPG trạm nạp Thị Vải.",              en: "Supply of pump sets and LPG loading arms for Thi Vai filling station." },
    proj_valve_nghe_an:           { vi: "Cung cấp máy bơm, máy nén LPG, van đo bồn kho cảng 1000 tấn Cửa Lò.", en: "Supply of LPG pumps, compressors, and tank gauging valves for the 1000-ton Cua Lo terminal." },

    // 6. LPG Vaporizing Systems
    proj_vapor_300:  { vi: "Cung cấp cụm máy hóa hơi 300kg/hr, Kagla.",  en: "Supply of 300 kg/hr Kagla vaporizer units." },
    proj_vapor_500:  { vi: "Cung cấp cụm máy hóa hơi 500kg/hr, Kagla.",  en: "Supply of 500 kg/hr Kagla vaporizer units." },
    proj_vapor_1000: { vi: "Cung cấp cụm máy hóa hơi 1000kg/hr, Kagla.", en: "Supply of 1000 kg/hr Kagla vaporizer units." },

    // 7. LPG Ships
    proj_ship_300m3:        { vi: "Cung cấp máy bơm, máy nén, tàu gas 300m³.", en: "Supply of pumps and compressors for 300 m³ LPG vessel." },
    proj_ship_1200m3:       { vi: "Cung cấp, lắp đặt tổ hợp máy nén Corken 400m³/hr; hệ thống van an toàn thủy lực & đo bồn, tàu ga 1200m³.", en: "Supply and installation of Corken 400 m³/hr compressor set; hydraulic safety valve and tank gauging system for 1200 m³ LPG vessel." },
    proj_ship_nh3:          { vi: "Corken cung cấp tổ hợp máy nén NH₃.", en: "Corken supplied NH₃ compressor set." },
    proj_ship_safety_valve: { vi: "Cung cấp van an toàn áp suất bồn.", en: "Supply of tank pressure safety relief valves." },
    proj_ship_hydraulic:    { vi: "Cung cấp tổ hợp van an toàn thủy lực hệ thống làm hàng.", en: "Supply of hydraulic safety valve set for cargo handling system." },

    // VIII. SERVICES
    services_title: { vi: "Dịch vụ", en: "Services" },
    services_sub:   { vi: "Chúng tôi cung cấp các dịch vụ bảo trì, sửa chữa, lắp đặt đưa vào vận hành các hệ thống, thiết bị LPG bao gồm:", en: "We provide maintenance, repair, installation, and commissioning services for LPG systems and equipment, including:" },
    about_service_training_1: { vi: "Băng chuyền carousel chiết nạp tự động các nhà máy đóng bình LPG.", en: "Automatic LPG filling carousel conveyors for cylinder bottling plants." },
    about_service_training_2: { vi: "Trạm bơm, trạm nén LPG cho kho cảng LPG, tàu biển, xe bồn.", en: "LPG pump and compressor stations for LPG terminals, ships, and tanker trucks." },
    about_service_training_3: { vi: "Hệ thống đo đạc bồn tại kho cảng LPG.", en: "Tank gauging systems at LPG terminals." },
    about_service_training_4: { vi: "Hệ thống hóa hơi LPG, LPG Air Mixer cho các nhà máy công nghiệp.", en: "LPG vaporizing systems and LPG Air Mixers for industrial plants." },
    about_service_training_5: { vi: "Hút chân không bồn LPG khối cầu, bồn trụ.", en: "Tank evacuation of spherical and cylindrical LPG tanks." },

    // IX. PRODUCTS
    // 1. Sidebar (Universal)
    // a. Tier 1
    tier1_sub1: { vi: "Hệ thống chiết nạp LPG", en: "LPG Filling System" },
    tier1_sub2: { vi: "Kosan Crisplant", en: "Kosan Crisplant" },
    tier1_sub3: { vi: "Siraga", en: "Siraga" },

    // b. Tier 2
    tier2_sub1: { vi: "Máy bơm", en: "Pumps" },
    tier2_sub2: { vi: "Máy nén", en: "Compressors" },
    tier2_sub3: { vi: "Phụ kiện", en: "Accessories" },

    // c. Tier 3
    tier3_sub1: { vi: "Van đường ống LPG", en: "Pipeline Valves" },
    tier3_sub2: { vi: "Van tàu biển LPG", en: "Marine Valves" },
    tier3_sub3: { vi: "Van LNG", en: "LNG Valves" },

    // d. Tier 4
    tier4_sub1: { vi: "Máy hóa hơi", en: "Vaporizers" },
    tier4_sub2: { vi: "Mixers", en: "Mixers" },

    // e. Tier 5
    tier5_sub1: { vi: "Thiết bị LPG/NH₃", en: "LPG/NH₃ Equipment" },
    tier5_sub2: { vi: "Van cryogenic", en: "Cryogenic Valves" },

    // f. Tier 6
    tier6_sub1: { vi: "Bơm đa tầng", en: "Side Channel Pumps" },

    // g. Tier 7
    tier7_sub1: { vi: "Đồng hồ đo lưu lượng LPG", en: "LPG Flow Meters" },


    // h. Tier 8
    tier8_sub1: { vi: "Cần xuất LPG", en: "LPG Loading Arms" },
    tier8_sub2: { vi: "Cần xuất LNG", en: "LNG Loading Arms" },

    // i. Tier 9
    tier9_sub1: { vi: "Thiết bị đo mức bể chứa", en: "Tank Gauging" },








    // 2. Titles
    product_title_0: { vi: "Sản phẩm của VINA LPG", en: "Our Products" },
    product_title_1: { vi: "Phụ kiện", en: "Accessories" },


    // 3. Subtitles
    product_sub_1: { vi: "", en: "" },

};

function cleanSidebarPrefixes() {
    document.querySelectorAll('.side-menu .submenu-link').forEach(link => {
        link.childNodes.forEach(node => {
            if (node.nodeType === Node.TEXT_NODE) {
                node.textContent = node.textContent.replace(/^[^\p{L}\p{N}<]+/u, '');
            }
        });
    });
}

function setupBackToTopButton() {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'back-to-top';
    button.setAttribute('aria-label', 'Back to top');
    button.innerHTML = '<span class="back-to-top-chevron" aria-hidden="true"></span>';
    document.body.appendChild(button);

    function updateBackToTopProgress() {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = scrollHeight > 0 ? Math.min(scrollTop / scrollHeight, 1) : 0;
        const revealThreshold = scrollHeight > 0 ? Math.min(180, Math.max(24, scrollHeight * 0.2)) : 180;

        button.style.setProperty('--scroll-progress', `${progress * 360}deg`);
        button.classList.toggle('visible', scrollTop > revealThreshold);
    }

    button.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', updateBackToTopProgress, { passive: true });
    window.addEventListener('resize', updateBackToTopProgress);
    updateBackToTopProgress();
}


// LANGUAGE FUNCTION (L)
let currentLang = 'vi'; // Default to Vietnamese

function switchLanguage(lang) {
    currentLang = lang;
    
    // Update all elements with data-key attribute
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[key] && translations[key][lang]) {
            // Handle different element types
            if (element.tagName === 'INPUT' && element.getAttribute('placeholder') !== null) {
                element.placeholder = translations[key][lang];
            } else if (element.tagName === 'IMG') {
                // Skip images - they don't need translation
                return;
            } else {
                element.textContent = translations[key][lang];
            }
        }
    });
    
    // Save preference to localStorage
    localStorage.setItem('vinalpg_language', lang);
}

// Initialize language from localStorage or default
function initLanguage() {
    const savedLang = localStorage.getItem('vinalpg_language');
    let langToUse = 'vi'; // default to Vietnamese
    
    if (savedLang && (savedLang === 'vi' || savedLang === 'en')) {
        langToUse = savedLang;
    }
    
    // Update button flag and text
    const currentFlagImg = document.querySelector('.navbar-right .lang-switch-btn img');
    const langCurrentSpan = document.querySelector('.navbar-right .lang-current');
    
    if (langToUse === 'vi') {
        if (currentFlagImg) {
            currentFlagImg.src = 'https://flagcdn.com/24x18/vn.png';
            currentFlagImg.srcset = 'https://flagcdn.com/48x36/vn.png 2x';
        }
        if (langCurrentSpan) langCurrentSpan.textContent = 'VI';
    } else {
        if (currentFlagImg) {
            currentFlagImg.src = 'https://flagcdn.com/24x18/us.png';
            currentFlagImg.srcset = 'https://flagcdn.com/48x36/us.png 2x';
        }
        if (langCurrentSpan) langCurrentSpan.textContent = 'EN';
    }
    
    // Update mobile button
    const mobileLangFlag = document.getElementById('mobileLangFlag');
    const mobileLangText = document.getElementById('mobileLangText');
    if (mobileLangFlag && mobileLangText) {
    if (langToUse === 'vi') {
        mobileLangFlag.src = 'https://flagcdn.com/24x18/vn.png';
        mobileLangText.textContent = 'VN';
    } else {
        mobileLangFlag.src = 'https://flagcdn.com/24x18/us.png';
        mobileLangText.textContent = 'US';
    }
}
    
    // Apply translations to all elements
    currentLang = langToUse;
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[key] && translations[key][langToUse]) {
            if (element.tagName === 'INPUT' && element.getAttribute('placeholder') !== null) {
                element.placeholder = translations[key][langToUse];
            } else if (element.tagName !== 'IMG') {
                element.textContent = translations[key][langToUse];
            }
        }
    });
}

// Switcher and dropdown
function setupLanguageSwitcher() {
    const langBtn = document.getElementById('langSwitchBtn');
    const dropdownMenu = document.getElementById('langDropdownMenu');
    const langOptions = document.querySelectorAll('.lang-option');
    const langCurrentSpan = document.querySelector('.lang-current');
    const currentFlagImg = document.querySelector('.lang-switch-btn img');
    
    // Toggle dropdown on button click
    if (langBtn) {
        langBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            dropdownMenu.classList.toggle('show');
        });
    }
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (langBtn && !langBtn.contains(e.target) && dropdownMenu) {
            dropdownMenu.classList.remove('show');
        }
    });
    
    // Handle language selection
    langOptions.forEach(option => {
        option.addEventListener('click', function(e) {
            e.preventDefault();
            const newLang = this.getAttribute('data-lang');
            if (newLang && newLang !== currentLang) {
                switchLanguage(newLang);
                
                // Update button flag and text
                if (newLang === 'vi') {
                    currentFlagImg.src = 'https://flagcdn.com/24x18/vn.png';
                    currentFlagImg.srcset = 'https://flagcdn.com/48x36/vn.png 2x';
                    langCurrentSpan.textContent = 'VI';
                } else {
                    currentFlagImg.src = 'https://flagcdn.com/24x18/us.png';
                    currentFlagImg.srcset = 'https://flagcdn.com/48x36/us.png 2x';
                    langCurrentSpan.textContent = 'EN';
                }
            }
            dropdownMenu.classList.remove('show');
        });
    });
}


// Header element refs — assigned by initHeader() after header.html is injected
let hamburger, sideMenu, overlay;

function toggleMenu() {
    if (!hamburger || !sideMenu || !overlay) return;
    hamburger.classList.toggle('active');
    sideMenu.classList.toggle('active');
    overlay.classList.toggle('active');

    if (sideMenu.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
        document.querySelectorAll('.submenu').forEach(sub => sub.classList.remove('active'));
        document.querySelectorAll('.menu-link').forEach(link => link.classList.remove('active'));
    }
}

// Mobile view toggle with Ctrl+Alt+M
document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.altKey && e.key === 'm') {
        e.preventDefault();
        document.body.classList.toggle('mobile-view');
    }
});

// Search element refs — assigned by initHeader() after header.html is injected
let searchOverlay, searchMobileBtn, searchCloseBtn, searchModalInput, searchResults, searchWrapper;

// Define searchable content (bilingual)
const searchableContent = [
    { title_vi: "TRANG CHỦ", title_en: "HOME", url: "index.html", description_vi: "Trang chủ - Giới thiệu VINA LPG", description_en: "Home page - VINA LPG introduction" },
    { title_vi: "Về VINA LPG", title_en: "About VINA LPG", url: "aboutus.html", description_vi: "Thông tin về công ty VINA LPG", description_en: "About VINA LPG company" },
    { title_vi: "Khách hàng", title_en: "Our Customers", url: "#", description_vi: "Thông tin khách hàng của chúng tôi", description_en: "Our customers information" },
    { title_vi: "Hoạt động toàn cầu", title_en: "Global Operations", url: "#", description_vi: "Hoạt động toàn cầu", description_en: "Global operations" },
    { title_vi: "SẢN PHẨM & DỊCH VỤ", title_en: "PRODUCTS & SERVICES", url: "#", description_vi: "Sản phẩm và dịch vụ", description_en: "Products and services" },
    { title_vi: "TIN TỨC", title_en: "NEWS & UPDATES", url: "#", description_vi: "Tin tức và cập nhật", description_en: "News and updates" },
    { title_vi: "LIÊN HỆ", title_en: "CONTACT US", url: "#", description_vi: "Thông tin liên hệ", description_en: "Contact information" },
    { title_vi: "Bình LPG", title_en: "LPG Cylinders", url: "#", description_vi: "Bình LPG chất lượng cao", description_en: "High quality LPG cylinders" },
    { title_vi: "Giải pháp khí", title_en: "Gas solutions", url: "#", description_vi: "Giải pháp khí công nghiệp và thương mại", description_en: "Industrial and commercial gas solutions" },
    { title_vi: "BẮT ĐẦU", title_en: "GET STARTED", url: "#", description_vi: "Bắt đầu với VINA LPG", description_en: "Get started with VINA LPG" },
    { title_vi: "TÌM HIỂU THÊM", title_en: "LEARN MORE", url: "#", description_vi: "Tìm hiểu thêm về chúng tôi", description_en: "Learn more about us" },
    { title_vi: "Thiết bị đo lường", title_en: "Measuring Equipment", url: "#", description_vi: "Thiết bị đo lưu lượng, áp suất, nhiệt độ", description_en: "Flow, pressure, temperature measuring equipment" },
    { title_vi: "Bơm & Máy nén", title_en: "Pump & Compressor", url: "#", description_vi: "Hệ thống bơm và máy nén khí", description_en: "Liquid transfer pump & compression system" },
    { title_vi: "Van an toàn", title_en: "Safety Valves", url: "#", description_vi: "Van an toàn PRV, ESV, EFV", description_en: "Pressure relief valves, emergency shut off valves" }
];

function getSearchableContentForCurrentLang() {
    return searchableContent.map(item => ({
        title: currentLang === 'vi' ? item.title_vi : item.title_en,
        url: item.url,
        description: currentLang === 'vi' ? item.description_vi : item.description_en
    }));
}

function openSearchModal() {
    if (!searchOverlay) return;
    searchOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    setTimeout(() => { if (searchModalInput) searchModalInput.focus(); }, 100);
}

function closeSearchModal() {
    if (!searchOverlay) return;
    searchOverlay.classList.remove('active');
    document.body.style.overflow = '';
    if (searchModalInput) searchModalInput.value = '';
    if (searchResults) searchResults.innerHTML = '';
}

function performSearch(query) {
    if (!searchResults) return;
    if (!query.trim()) {
        searchResults.innerHTML = '';
        return;
    }
    
    const lowerQuery = query.toLowerCase();
    const content = getSearchableContentForCurrentLang();
    const results = content.filter(item => 
        item.title.toLowerCase().includes(lowerQuery) || 
        item.description.toLowerCase().includes(lowerQuery)
    );
    
    displayResults(results, query);
}

function displayResults(results, query) {
    const noResultsText = currentLang === 'vi' ? 'Không tìm thấy kết quả cho "' : 'No results found for "';
    
    if (results.length === 0) {
        searchResults.innerHTML = '<div class="no-results">' + noResultsText + query + '"</div>';
        return;
    }
    
    searchResults.innerHTML = results.map(result => `
        <div class="search-result-item">
            <a href="${result.url}">
                <div>${highlightText(result.title, query)}</div>
                <div class="result-description">${highlightText(result.description, query)}</div>
            </a>
        </div>
    `).join('');
    
    document.querySelectorAll('.search-result-item a').forEach(link => {
        link.addEventListener('click', closeSearchModal);
    });
}

function highlightText(text, query) {
    if (!query) return text;
    const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    return text.replace(regex, '<span style="background: #2277BB; color: #FFFFFF; padding: 2px 4px; border-radius: 0px;">$1</span>');
}

function initHeader() {
    // Assign all header element refs
    hamburger = document.getElementById('hamburgerBtn');
    sideMenu = document.getElementById('sideMenu');
    overlay = document.getElementById('menuOverlay');
    searchOverlay = document.getElementById('searchOverlay');
    searchMobileBtn = document.getElementById('searchMobileBtn');
    searchCloseBtn = document.getElementById('searchCloseBtn');
    searchModalInput = document.getElementById('searchModalInput');
    searchResults = document.getElementById('searchResults');
    searchWrapper = document.querySelector('.search-wrapper');

    // Hamburger
    if (hamburger && sideMenu && overlay) {
        hamburger.addEventListener('click', toggleMenu);
        overlay.addEventListener('click', toggleMenu);
    }

    document.querySelectorAll('[data-dropdown]').forEach(dropdown => {
        dropdown.addEventListener('click', function(e) {
            e.stopPropagation();
            const submenuId = this.getAttribute('data-dropdown');
            const submenu = document.getElementById(submenuId);
            if (submenu) {
                submenu.classList.toggle('active');
                this.classList.toggle('active');
            }
        });
    });

    document.querySelectorAll('.side-menu .submenu-link').forEach(link => {
        link.addEventListener('click', function(e) { e.stopPropagation(); });
    });

    document.querySelectorAll('.menu-link, .submenu-link, .social-link, .footer-social a').forEach(link => {
        link.addEventListener('click', function(e) {
            if (!this.hasAttribute('data-dropdown')) { }
        });
    });

    // Search
    if (searchWrapper) {
        searchWrapper.addEventListener('click', function(e) { e.stopPropagation(); openSearchModal(); });
    }
    if (searchMobileBtn) searchMobileBtn.addEventListener('click', openSearchModal);
    if (searchCloseBtn) searchCloseBtn.addEventListener('click', closeSearchModal);
    if (searchOverlay) {
        searchOverlay.addEventListener('click', function(e) {
            if (e.target === searchOverlay) closeSearchModal();
        });
    }
    if (searchModalInput) {
        searchModalInput.addEventListener('input', function(e) { performSearch(e.target.value); });
        searchModalInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' && searchModalInput.value.trim()) {
                const firstResult = document.querySelector('.search-result-item a');
                if (firstResult) { window.location.href = firstResult.getAttribute('href'); closeSearchModal(); }
            }
        });
    }

    // Language
    setupLanguageSwitcher();
    initLanguage();
    cleanSidebarPrefixes();

    // Mobile language switcher
    const mobileLangTrigger = document.getElementById('mobileLangTrigger');
    const mobileLangSubmenu = document.getElementById('mobileLangSubmenu');
    const mobileLangOptions = document.querySelectorAll('.mobile-lang-option');
    const mobileLangFlag = document.getElementById('mobileLangFlag');
    const mobileLangText = document.getElementById('mobileLangText');

    if (mobileLangTrigger) {
        mobileLangTrigger.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            mobileLangSubmenu.classList.toggle('active');
            this.classList.toggle('active');
        });
    }

    mobileLangOptions.forEach(option => {
        option.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const newLang = this.getAttribute('data-lang');
            if (newLang && newLang !== currentLang) {
                switchLanguage(newLang);
                const isVi = newLang === 'vi';
                const flagSrc = isVi ? 'https://flagcdn.com/24x18/vn.png' : 'https://flagcdn.com/24x18/us.png';
                const label = isVi ? 'VI' : 'EN';
                if (mobileLangFlag) mobileLangFlag.src = flagSrc;
                if (mobileLangText) mobileLangText.textContent = label;
                const desktopFlag = document.querySelector('.navbar-right .lang-switch-btn img');
                const desktopText = document.querySelector('.navbar-right .lang-current');
                if (desktopFlag) desktopFlag.src = flagSrc;
                if (desktopText) desktopText.textContent = label;
            }
            if (mobileLangSubmenu) mobileLangSubmenu.classList.remove('active');
            if (mobileLangTrigger) mobileLangTrigger.classList.remove('active');
        });
    });

    // Mega menus
    document.querySelectorAll('.mega-parent').forEach(megaParent => {
        let megaTimeout;
        megaParent.addEventListener('mouseenter', () => { clearTimeout(megaTimeout); megaParent.classList.add('mega-open'); });
        megaParent.addEventListener('mouseover', () => { clearTimeout(megaTimeout); });
        megaParent.addEventListener('mouseleave', () => {
            megaTimeout = setTimeout(() => megaParent.classList.remove('mega-open'), 150);
        });
        megaParent.querySelectorAll('.mega-col-body a[data-img]').forEach(link => {
            const img = link.closest('.mega-col-body').querySelector('.mega-col-img');
            if (!img) return;
            link.addEventListener('mouseenter', () => { img.src = link.dataset.img; img.classList.add('mega-img-visible'); });
            link.addEventListener('mouseleave', () => { img.classList.remove('mega-img-visible'); });
        });
    });
}

function executeInjectedScripts(container) {
    container.querySelectorAll('script').forEach(oldScript => {
        const script = document.createElement('script');
        Array.from(oldScript.attributes).forEach(attr => {
            script.setAttribute(attr.name, attr.value);
        });
        script.textContent = oldScript.textContent;
        oldScript.replaceWith(script);
    });
}

function loadFragment(containerId, url, afterLoad) {
    const container = document.getElementById(containerId);
    if (!container) return Promise.resolve();
    return fetch(url)
        .then(r => r.text())
        .then(html => {
            container.innerHTML = html;
            executeInjectedScripts(container);
            if (afterLoad) afterLoad(container);
        })
        .catch(err => console.warn(`${url} load failed:`, err));
}

function loadHeader() {
    return loadFragment('site-header', 'header.html', initHeader);
}

function loadFooter() {
    return loadFragment('site-footer', 'footer.html');
}

function loadSidebar() {
    return loadFragment('product-sidebar', 'sidebar.html');
}

function setupProductSidebar() {
    document.querySelectorAll('.tree-toggle').forEach(function (toggle) {
        toggle.addEventListener('click', function (e) {
            e.stopPropagation();
            const targetId = this.dataset.target;
            if (!targetId) return;
            const list = document.getElementById(targetId);
            if (!list) return;

            const isOpen = list.classList.contains('is-open');
            list.classList.toggle('is-open', !isOpen);

            const arrow = this.querySelector('.tree-arrow');
            if (arrow) {
                arrow.style.transform = isOpen ? 'rotate(-90deg)' : 'rotate(0deg)';
            }
        });
    });

    document.querySelectorAll('.t2-list').forEach(function(list) {
        list.classList.add('is-open');
    });
}

function setupProductCards() {
    document.querySelectorAll('.tag-btn').forEach(function (btn) {
        btn.addEventListener('click', function () {
            document.querySelectorAll('.tag-btn').forEach(function (item) {
                item.classList.remove('is-active');
            });
            this.classList.add('is-active');
        });
    });

    document.querySelectorAll('.product-card').forEach(function (card) {
        const primaryLink = card.querySelector('.card-image-link, .card-title-link');
        if (!primaryLink) {
            return;
        }

        card.style.cursor = 'pointer';
        card.addEventListener('click', function (event) {
            const interactiveTarget = event.target.closest('a, button');
            if (interactiveTarget) {
                return;
            }

            window.location.href = primaryLink.getAttribute('href');
        });
    });
}

document.addEventListener('DOMContentLoaded', function() {
    setupBackToTopButton();

    Promise.all([
        loadHeader(),
        loadFooter(),
        loadSidebar()
    ]).then(() => {
        setupProductSidebar();
        setupProductCards();
        initLanguage();
    });

    document.body.addEventListener('dragstart', function(e) {
        if (e.target.tagName === 'IMG' ||
            e.target.getAttribute('style')?.includes('background-image') ||
            e.target.classList.contains('carousel-slide')) {
            e.preventDefault();
            return false;
        }
    });

    document.body.addEventListener('contextmenu', function(e) {
        if (e.target.tagName === 'IMG' ||
            e.target.getAttribute('style')?.includes('background-image')) {
            e.preventDefault();
            return false;
        }
    });
});



