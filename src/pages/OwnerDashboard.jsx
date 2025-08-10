import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { Bell, User, Calendar, Clock, Phone, Mail, DollarSign, List, Info, CreditCard, Home, Menu, X, BarChart, History, LogOut, Search, Filter, Plus, Eye, Edit, Trash2, Star, TrendingUp, AlertCircle, CheckCircle, Globe } from "lucide-react";

export default function EnhancedOwnerDashboard() {
    // Language state
    const [currentLanguage, setCurrentLanguage] = useState("en");
    const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);

    // Language translations
    const translations = {
        en: {
            salonPro: "Salon Pro",
            ownerDashboard: "Owner Dashboard",
            dashboard: "Dashboard",
            history: "History",
            reports: "Reports",
            logout: "Logout",
            loggingOut: "Logging out...",
            todaysAppointments: "Today's Appointments",
            totalRevenue: "Total Revenue",
            pendingPayments: "Pending Payments",
            averageRating: "Average Rating",
            excellentService: "Excellent service!",
            searchPlaceholder: "Search customers or services...",
            allStatus: "All Status",
            confirmed: "Confirmed",
            pending: "Pending",
            completed: "Completed",
            newAppointment: "New Appointment",
            upcomingAppointments: "Upcoming Appointments",
            results: "results",
            customer: "Customer",
            appointment: "Appointment",
            service: "Service",
            payment: "Payment",
            status: "Status",
            actions: "Actions",
            paid: "Paid",
            noAppointmentsFound: "No appointments found matching your criteria",
            appointmentHistory: "Appointment History",
            reportsAnalytics: "Reports & Analytics",
            monthlyRevenue: "Monthly Revenue",
            totalCustomers: "Total Customers",
            avgRating: "Avg. Rating",
            popularServices: "Popular Services",
            performanceMetrics: "Performance Metrics",
            customerRetention: "Customer Retention",
            averageSessionValue: "Average Session Value",
            noShowRate: "No-Show Rate",
            bookings: "bookings",
            satisfaction: "satisfaction",
            newThisMonth: "new this month",
            vsLastMonth: "vs last month",
            fromYesterday: "from yesterday",
            thisWeek: "this week",
            notifications: "Notifications",
            noNewNotifications: "No new notifications",
            clearAllNotifications: "Clear All Notifications",
            firstTimeCustomer: "First-time customer.",
            calledToConfirm: "Called to confirm.",
            prefersQuietAppointments: "Prefers quiet appointments.",
            regularCustomer: "Regular customer.",
            happyWithService: "Happy with service.",
            newAppointmentBooked: "New appointment booked for Glamour Cuts on Aug 15, 10:00 AM.",
            paymentPending: "Payment pending for Bob Builder's appointment on Aug 16.",
            dailySummary: "Daily summary: 5 appointments today, 3 completed, 2 upcoming.",
            haircutStyle: "Haircut & Style",
            beardTrim: "Beard Trim",
            manicure: "Manicure",
            colorTreatment: "Color Treatment",
            haircut: "Haircut",
            highlights: "Highlights",
            language: "Language"
        },
        hi: {
            salonPro: "सैलून प्रो",
            ownerDashboard: "मालिक डैशबोर्ड",
            dashboard: "डैशबोर्ड",
            history: "इतिहास",
            reports: "रिपोर्ट्स",
            logout: "लॉग आउट",
            loggingOut: "लॉग आउट हो रहा है...",
            todaysAppointments: "आज की अपॉइंटमेंट्स",
            totalRevenue: "कुल आय",
            pendingPayments: "पेंडिंग पेमेंट्स",
            averageRating: "औसत रेटिंग",
            excellentService: "उत्कृष्ट सेवा!",
            searchPlaceholder: "ग्राहक या सेवाएं खोजें...",
            allStatus: "सभी स्थिति",
            confirmed: "पुष्ट",
            pending: "पेंडिंग",
            completed: "पूर्ण",
            newAppointment: "नई अपॉइंटमेंट",
            upcomingAppointments: "आगामी अपॉइंटमेंट्स",
            results: "परिणाम",
            customer: "ग्राहक",
            appointment: "अपॉइंटमेंट",
            service: "सेवा",
            payment: "भुगतान",
            status: "स्थिति",
            actions: "कार्य",
            paid: "भुगतान किया",
            noAppointmentsFound: "आपके मानदंडों से मेल खाने वाली कोई अपॉइंटमेंट नहीं मिली",
            appointmentHistory: "अपॉइंटमेंट इतिहास",
            reportsAnalytics: "रिपोर्ट्स और एनालिटिक्स",
            monthlyRevenue: "मासिक आय",
            totalCustomers: "कुल ग्राहक",
            avgRating: "औसत रेटिंग",
            popularServices: "लोकप्रिय सेवाएं",
            performanceMetrics: "प्रदर्शन मेट्रिक्स",
            customerRetention: "ग्राहक प्रतिधारण",
            averageSessionValue: "औसत सत्र मूल्य",
            noShowRate: "न आने की दर",
            bookings: "बुकिंग",
            satisfaction: "संतुष्टि",
            newThisMonth: "इस महीने नए",
            vsLastMonth: "पिछले महीने की तुलना में",
            fromYesterday: "कल से",
            thisWeek: "इस सप्ताह",
            notifications: "सूचनाएं",
            noNewNotifications: "कोई नई सूचना नहीं",
            clearAllNotifications: "सभी सूचनाएं साफ़ करें",
            firstTimeCustomer: "पहली बार आने वाला ग्राहक।",
            calledToConfirm: "पुष्टि के लिए फोन किया।",
            prefersQuietAppointments: "शांत अपॉइंटमेंट पसंद करता है।",
            regularCustomer: "नियमित ग्राहक।",
            happyWithService: "सेवा से खुश।",
            newAppointmentBooked: "ग्लैमर कट्स के लिए 15 अगस्त, 10:00 AM पर नई अपॉइंटमेंट बुक की गई।",
            paymentPending: "बॉब बिल्डर की 16 अगस्त की अपॉइंटमेंट के लिए भुगतान पेंडिंग है।",
            dailySummary: "दैनिक सारांश: आज 5 अपॉइंटमेंट्स, 3 पूर्ण, 2 आगामी।",
            haircutStyle: "हेयरकट और स्टाइल",
            beardTrim: "दाढ़ी की कटाई",
            manicure: "मैनीक्योर",
            colorTreatment: "रंग उपचार",
            haircut: "हेयरकट",
            highlights: "हाइलाइट्स",
            language: "भाषा"
        },
        mr: {
            salonPro: "सैलून प्रो",
            ownerDashboard: "मालक डॅशबोर्ड",
            dashboard: "डॅशबोर्ड",
            history: "इतिहास",
            reports: "अहवाल",
            logout: "लॉग आउट",
            loggingOut: "लॉग आउट होत आहे...",
            todaysAppointments: "आजच्या भेटी",
            totalRevenue: "एकूण उत्पन्न",
            pendingPayments: "प्रलंबित पेमेंट",
            averageRating: "सरासरी रेटिंग",
            excellentService: "उत्कृष्ट सेवा!",
            searchPlaceholder: "ग्राहक किंवा सेवा शोधा...",
            allStatus: "सर्व स्थिती",
            confirmed: "पुष्ट",
            pending: "प्रलंबित",
            completed: "पूर्ण",
            newAppointment: "नवीन भेट",
            upcomingAppointments: "आगामी भेटी",
            results: "परिणाम",
            customer: "ग्राहक",
            appointment: "भेट",
            service: "सेवा",
            payment: "पेमेंट",
            status: "स्थिती",
            actions: "कृती",
            paid: "भरलेले",
            noAppointmentsFound: "तुमच्या निकषांशी जुळणारी कोणतीही भेट सापडली नाही",
            appointmentHistory: "भेटीचा इतिहास",
            reportsAnalytics: "अहवाल आणि विश्लेषण",
            monthlyRevenue: "मासिक उत्पन्न",
            totalCustomers: "एकूण ग्राहक",
            avgRating: "सरा. रेटिंग",
            popularServices: "लोकप्रिय सेवा",
            performanceMetrics: "कार्यप्रदर्शन मेट्रिक्स",
            customerRetention: "ग्राहक धारणा",
            averageSessionValue: "सरासरी सत्र मूल्य",
            noShowRate: "न आल्याचा दर",
            bookings: "बुकिंग",
            satisfaction: "समाधान",
            newThisMonth: "या महिन्यात नवीन",
            vsLastMonth: "मागील महिन्याच्या तुलनेत",
            fromYesterday: "कालपासून",
            thisWeek: "या आठवड्यात",
            notifications: "सूचना",
            noNewNotifications: "कोणत्याही नवीन सूचना नाहीत",
            clearAllNotifications: "सर्व सूचना साफ करा",
            firstTimeCustomer: "प्रथमच येणारा ग्राहक.",
            calledToConfirm: "पुष्टीसाठी फोन केला.",
            prefersQuietAppointments: "शांत भेटी पसंत करतो.",
            regularCustomer: "नियमित ग्राहक.",
            happyWithService: "सेवेने आनंदी.",
            newAppointmentBooked: "ग्लॅमर कट्ससाठी 15 ऑगस्ट, 10:00 AM ला नवीन भेट बुक केली.",
            paymentPending: "बॉब बिल्डरच्या 16 ऑगस्टच्या भेटीसाठी पेमेंट प्रलंबित आहे.",
            dailySummary: "दैनिक सारांश: आज 5 भेटी, 3 पूर्ण, 2 आगामी.",
            haircutStyle: "केसकापणी आणि स्टाइल",
            beardTrim: "दाढीची छाटणी",
            manicure: "मॅनिक्योर",
            colorTreatment: "रंग उपचार",
            haircut: "केसकापणी",
            highlights: "हायलाइट्स",
            language: "भाषा"
        }
    };

    const languages = [
        { code: "en", name: "English", flag: "🇺🇸" },
        { code: "hi", name: "हिंदी", flag: "🇮🇳" },
        { code: "mr", name: "मराठी", flag: "🇮🇳" }
    ];

    const t = (key) => translations[currentLanguage][key] || translations.en[key] || key;

    // Enhanced Mock Data with translations
    const [customers] = useState([
        {
            id: 1,
            name: "Alice Wonderland",
            phone: "+1 123-456-7890",
            email: "alice@example.com",
            salon: "Glamour Cuts",
            date: "2025-08-15",
            time: "10:00 AM",
            service: "haircutStyle",
            price: 50,
            paymentStatus: "paid",
            notes: "firstTimeCustomer",
            rating: 5,
            status: "confirmed"
        },
        {
            id: 2,
            name: "Bob Builder",
            phone: "+1 987-654-3210",
            email: "bob@example.com",
            salon: "Style Studio",
            date: "2025-08-16",
            time: "11:00 AM",
            service: "beardTrim",
            price: 20,
            paymentStatus: "pending",
            notes: "calledToConfirm",
            rating: 4,
            status: "pending"
        },
        {
            id: 3,
            name: "Charlie Chaplin",
            phone: "+1 555-111-2222",
            email: "charlie@example.com",
            salon: "Glamour Cuts",
            date: "2025-08-15",
            time: "02:00 PM",
            service: "manicure",
            price: 35,
            paymentStatus: "paid",
            notes: "prefersQuietAppointments",
            rating: 5,
            status: "confirmed"
        },
        {
            id: 4,
            name: "Diana Prince",
            phone: "+1 444-555-6666",
            email: "diana@example.com",
            salon: "Urban Hair",
            date: "2025-08-17",
            time: "09:00 AM",
            service: "colorTreatment",
            price: 120,
            paymentStatus: "paid",
            notes: "",
            rating: 5,
            status: "confirmed"
        },
    ]);

    const [pastAppointments] = useState([
        {
            id: 5,
            name: "Frankenstein",
            phone: "+1 777-888-9999",
            email: "frank@example.com",
            salon: "Style Studio",
            date: "2025-08-01",
            time: "03:00 PM",
            service: "haircut",
            price: 40,
            paymentStatus: "paid",
            notes: "regularCustomer",
            rating: 4,
            status: "completed"
        },
        {
            id: 6,
            name: "Grace Hopper",
            phone: "+1 333-222-1111",
            email: "grace@example.com",
            salon: "Urban Hair",
            date: "2025-07-28",
            time: "10:00 AM",
            service: "highlights",
            price: 90,
            paymentStatus: "paid",
            notes: "happyWithService",
            rating: 5,
            status: "completed"
        },
    ]);

    const [notifications, setNotifications] = useState([
        { id: 1, message: "newAppointmentBooked", type: "info", time: "2 min ago" },
        { id: 2, message: "paymentPending", type: "warning", time: "5 min ago" },
        { id: 3, message: "dailySummary", type: "success", time: "1 hour ago" }
    ]);

    const [showNotifications, setShowNotifications] = useState(false);
    const [showSidebar, setShowSidebar] = useState(false);
    const [selectedTab, setSelectedTab] = useState("dashboard");
    const [searchTerm, setSearchTerm] = useState("");
    const [filterStatus, setFilterStatus] = useState("all");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    // Animation states
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const handleLogout = () => {
        setIsLoading(true);
        setTimeout(() => {
            console.log("Logged out successfully!");
            setIsLoading(false);
            // Redirect to the login page after a successful logout
            navigate('/login');
        }, 1000);
    };

    const clearNotifications = () => {
        setNotifications([]);
        setShowNotifications(false);
    };

    const getStatusColor = (status) => {
        switch (status) {
            case "confirmed": return "bg-green-100 text-green-800 border-green-200";
            case "pending": return "bg-yellow-100 text-yellow-800 border-yellow-200";
            case "completed": return "bg-blue-100 text-blue-800 border-blue-200";
            default: return "bg-gray-100 text-gray-800 border-gray-200";
        }
    };

    const getNotificationIcon = (type) => {
        switch (type) {
            case "warning": return <AlertCircle className="w-4 h-4 text-yellow-500" />;
            case "success": return <CheckCircle className="w-4 h-4 text-green-500" />;
            default: return <Info className="w-4 h-4 text-blue-500" />;
        }
    };

    const filteredCustomers = customers.filter(customer => {
        const matchesSearch = customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            t(customer.service).toLowerCase().includes(searchTerm.toLowerCase());
        const matchesFilter = filterStatus === "all" || customer.status.toLowerCase() === filterStatus.toLowerCase();
        return matchesSearch && matchesFilter;
    });

    const renderStatsCard = (title, value, icon, color, trend = null) => (
        <div className={`bg-white rounded-2xl shadow-lg p-6 transform hover:scale-105 transition-all duration-300 border-l-4 ${color}`}>
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-sm font-medium text-gray-600 mb-1">{title}</p>
                    <p className="text-3xl font-bold text-gray-900">{value}</p>
                    {trend && (
                        <div className="flex items-center mt-2 text-sm text-green-600">
                            <TrendingUp className="w-4 h-4 mr-1" />
                            {trend}
                        </div>
                    )}
                </div>
                <div className={`p-3 rounded-full ${color.replace('border-', 'bg-').replace('-500', '-100')}`}>
                    {icon}
                </div>
            </div>
        </div>
    );

    const renderContent = () => {
        switch (selectedTab) {
            case "dashboard":
                return (
                    <div className={`space-y-6 transition-all duration-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                        {/* Enhanced Stats Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {renderStatsCard(
                                t("todaysAppointments"),
                                customers.length,
                                <Calendar className="w-6 h-6 text-blue-600" />,
                                "border-blue-500",
                                `+12% ${t("fromYesterday")}`
                            )}
                            {renderStatsCard(
                                t("totalRevenue"),
                                `$${customers.reduce((acc, curr) => acc + curr.price, 0)}`,
                                <DollarSign className="w-6 h-6 text-green-600" />,
                                "border-green-500",
                                `+8% ${t("thisWeek")}`
                            )}
                            {renderStatsCard(
                                t("pendingPayments"),
                                customers.filter(c => c.paymentStatus === "pending").length,
                                <CreditCard className="w-6 h-6 text-yellow-600" />,
                                "border-yellow-500"
                            )}
                            {renderStatsCard(
                                t("averageRating"),
                                "4.8",
                                <Star className="w-6 h-6 text-purple-600" />,
                                "border-purple-500",
                                t("excellentService")
                            )}
                        </div>

                        {/* Search and Filter Bar */}
                        <div className="bg-white rounded-2xl shadow-lg p-6">
                            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                                <div className="relative flex-1 max-w-md">
                                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                    <input
                                        type="text"
                                        placeholder={t("searchPlaceholder")}
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                    />
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="relative">
                                        <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                        <select
                                            value={filterStatus}
                                            onChange={(e) => setFilterStatus(e.target.value)}
                                            className="pl-10 pr-8 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white transition-all duration-200"
                                        >
                                            <option value="all">{t("allStatus")}</option>
                                            <option value="confirmed">{t("confirmed")}</option>
                                            <option value="pending">{t("pending")}</option>
                                            <option value="completed">{t("completed")}</option>
                                        </select>
                                    </div>
                                    <button className="flex items-center gap-2 px-4 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all duration-200 transform hover:scale-105">
                                        <Plus className="w-5 h-5" />
                                        {t("newAppointment")}
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Enhanced Appointments Table */}
                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                            <div className="px-6 py-4 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-indigo-50">
                                <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                                    <List className="w-6 h-6 text-blue-600" /> {t("upcomingAppointments")}
                                    <span className="ml-2 px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full">
                                        {filteredCustomers.length} {t("results")}
                                    </span>
                                </h2>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="min-w-full">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{t("customer")}</th>
                                            <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{t("appointment")}</th>
                                            <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{t("service")}</th>
                                            <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{t("payment")}</th>
                                            <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{t("status")}</th>
                                            <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{t("actions")}</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                        {filteredCustomers.map((customer, index) => (
                                            <tr
                                                key={customer.id}
                                                className={`hover:bg-gray-50 transition-all duration-200 transform hover:scale-[1.01] ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                                                    }`}
                                                style={{ transitionDelay: `${index * 100}ms` }}
                                            >
                                                <td className="px-6 py-4">
                                                    <div className="flex items-center space-x-4">
                                                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                                                            {customer.name.charAt(0)}
                                                        </div>
                                                        <div>
                                                            <div className="font-medium text-gray-900">{customer.name}</div>
                                                            <div className="text-sm text-gray-500 flex items-center gap-1">
                                                                <Phone className="w-3 h-3" /> {customer.phone}
                                                            </div>
                                                            <div className="text-sm text-gray-500 flex items-center gap-1">
                                                                <Mail className="w-3 h-3" /> {customer.email}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className="text-sm font-medium text-gray-900">{customer.salon}</div>
                                                    <div className="text-sm text-gray-500 flex items-center gap-2 mt-1">
                                                        <Calendar className="w-4 h-4" /> {customer.date}
                                                    </div>
                                                    <div className="text-sm text-gray-500 flex items-center gap-2">
                                                        <Clock className="w-4 h-4" /> {customer.time}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className="text-sm font-medium text-gray-900">{t(customer.service)}</div>
                                                    <div className="flex items-center mt-1">
                                                        {[...Array(5)].map((_, i) => (
                                                            <Star
                                                                key={i}
                                                                className={`w-4 h-4 ${i < customer.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                                                            />
                                                        ))}
                                                        <span className="ml-2 text-sm text-gray-500">({customer.rating})</span>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className="text-lg font-bold text-gray-900">${customer.price}</div>
                                                    <span className={`inline-flex px-2 py-1 text-xs leading-5 font-semibold rounded-full ${customer.paymentStatus === "paid" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                                                        }`}>
                                                        {t(customer.paymentStatus)}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <span className={`inline-flex px-3 py-1 text-xs leading-5 font-semibold rounded-full border ${getStatusColor(customer.status)}`}>
                                                        {t(customer.status)}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className="flex space-x-2">
                                                        <button className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg transition-all duration-200 transform hover:scale-110">
                                                            <Eye className="w-4 h-4" />
                                                        </button>
                                                        <button className="p-2 text-green-600 hover:bg-green-100 rounded-lg transition-all duration-200 transform hover:scale-110">
                                                            <Edit className="w-4 h-4" />
                                                        </button>
                                                        <button className="p-2 text-red-600 hover:bg-red-100 rounded-lg transition-all duration-200 transform hover:scale-110">
                                                            <Trash2 className="w-4 h-4" />
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            {filteredCustomers.length === 0 && (
                                <div className="text-center py-12">
                                    <Search className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                                    <p className="text-gray-500 text-lg">{t("noAppointmentsFound")}</p>
                                </div>
                            )}
                        </div>
                    </div>
                );

            case "history":
                return (
                    <div className={`transition-all duration-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                            <div className="px-6 py-4 border-b border-gray-200 bg-gradient-to-r from-purple-50 to-pink-50">
                                <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                                    <History className="w-6 h-6 text-purple-600" /> {t("appointmentHistory")}
                                    <span className="ml-2 px-3 py-1 text-sm bg-purple-100 text-purple-800 rounded-full">
                                        {pastAppointments.length} {t("completed")}
                                    </span>
                                </h2>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="min-w-full">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{t("customer")}</th>
                                            <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{t("appointment")}</th>
                                            <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{t("service")}</th>
                                            <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{t("payment")}</th>
                                            <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{t("averageRating")}</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                        {pastAppointments.map((customer, index) => (
                                            <tr
                                                key={customer.id}
                                                className={`hover:bg-gray-50 transition-all duration-200 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                                                    }`}
                                                style={{ transitionDelay: `${index * 100}ms` }}
                                            >
                                                <td className="px-6 py-4">
                                                    <div className="flex items-center space-x-4">
                                                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                                                            {customer.name.charAt(0)}
                                                        </div>
                                                        <div>
                                                            <div className="font-medium text-gray-900">{customer.name}</div>
                                                            <div className="text-sm text-gray-500">{customer.phone}</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className="text-sm font-medium text-gray-900">{customer.salon}</div>
                                                    <div className="text-sm text-gray-500">{customer.date} at {customer.time}</div>
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-900">{t(customer.service)}</td>
                                                <td className="px-6 py-4">
                                                    <div className="text-lg font-bold text-gray-900">${customer.price}</div>
                                                    <span className="inline-flex px-2 py-1 text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                        {t(customer.paymentStatus)}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className="flex items-center">
                                                        {[...Array(5)].map((_, i) => (
                                                            <Star
                                                                key={i}
                                                                className={`w-4 h-4 ${i < customer.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                                                            />
                                                        ))}
                                                        <span className="ml-2 text-sm text-gray-600">({customer.rating})</span>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                );

            case "reports":
                return (
                    <div className={`transition-all duration-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                        <div className="space-y-6">
                            {/* Report Stats */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {renderStatsCard(
                                    t("monthlyRevenue"),
                                    "$12,540",
                                    <TrendingUp className="w-6 h-6 text-green-600" />,
                                    "border-green-500",
                                    `+15% ${t("vsLastMonth")}`
                                )}
                                {renderStatsCard(
                                    t("totalCustomers"),
                                    "284",
                                    <User className="w-6 h-6 text-blue-600" />,
                                    "border-blue-500",
                                    `+23 ${t("newThisMonth")}`
                                )}
                                {renderStatsCard(
                                    t("avgRating"),
                                    "4.8/5",
                                    <Star className="w-6 h-6 text-yellow-600" />,
                                    "border-yellow-500",
                                    `98% ${t("satisfaction")}`
                                )}
                            </div>

                            <div className="bg-white rounded-2xl shadow-lg p-6">
                                <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2 mb-6">
                                    <BarChart className="w-6 h-6 text-red-600" /> {t("reportsAnalytics")}
                                </h2>
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                    <div className="space-y-4">
                                        <h3 className="text-lg font-semibold text-gray-700">{t("popularServices")}</h3>
                                        <div className="space-y-3">
                                            {[
                                                { service: "haircutStyle", count: 45, percentage: 85 },
                                                { service: "colorTreatment", count: 32, percentage: 65 },
                                                { service: "manicure", count: 28, percentage: 55 },
                                                { service: "beardTrim", count: 15, percentage: 30 }
                                            ].map((item, index) => (
                                                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                                                    <div>
                                                        <div className="font-medium text-gray-900">{t(item.service)}</div>
                                                        <div className="text-sm text-gray-500">{item.count} {t("bookings")}</div>
                                                    </div>
                                                    <div className="w-32 bg-gray-200 rounded-full h-2">
                                                        <div
                                                            className="bg-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                                                            style={{ width: `${item.percentage}%` }}
                                                        ></div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <h3 className="text-lg font-semibold text-gray-700">{t("performanceMetrics")}</h3>
                                        <div className="space-y-3">
                                            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                                                <div className="flex items-center justify-between">
                                                    <span className="text-blue-700 font-medium">{t("customerRetention")}</span>
                                                    <span className="text-blue-800 text-xl font-bold">87%</span>
                                                </div>
                                            </div>
                                            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                                <div className="flex items-center justify-between">
                                                    <span className="text-green-700 font-medium">{t("averageSessionValue")}</span>
                                                    <span className="text-green-800 text-xl font-bold">$65</span>
                                                </div>
                                            </div>
                                            <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                                                <div className="flex items-center justify-between">
                                                    <span className="text-purple-700 font-medium">{t("noShowRate")}</span>
                                                    <span className="text-purple-800 text-xl font-bold">3.2%</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );

            default:
                return null;
        }
    };

    const navigationItems = [
        { id: "dashboard", label: t("dashboard"), icon: Home },
        { id: "history", label: t("history"), icon: History },
        { id: "reports", label: t("reports"), icon: BarChart }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 font-sans flex">
            {/* Enhanced Sidebar */}
            <div
                className={`fixed top-0 left-0 h-full w-72 bg-gradient-to-b from-indigo-900 via-indigo-800 to-purple-900 text-white p-6 z-50 transform transition-all duration-500 ease-in-out md:relative md:translate-x-0 md:shadow-2xl ${showSidebar ? "translate-x-0 shadow-2xl" : "-translate-x-full"
                    }`}
            >
                <div className="flex justify-between items-center mb-8">
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center">
                            <User className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <h2 className="text-xl font-bold">{t("salonPro")}</h2>
                            <p className="text-indigo-300 text-sm">{t("ownerDashboard")}</p>
                        </div>
                    </div>
                    <button
                        onClick={() => setShowSidebar(false)}
                        className="p-2 rounded-xl md:hidden hover:bg-white/10 transition-colors duration-200"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                {/* Owner Profile Card */}
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 mb-8">
                    <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-red-500 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                            SJ
                        </div>
                        <div>
                            <h3 className="font-semibold">Sarah Johnson</h3>
                            <p className="text-indigo-300 text-sm">Glamour Cuts Owner</p>
                            <div className="flex items-center mt-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                                ))}
                                <span className="ml-2 text-xs text-indigo-300">4.9 rating</span>
                            </div>
                        </div>
                    </div>
                </div>

                <nav className="space-y-2">
                    {navigationItems.map(({ id, label, icon: Icon }) => (
                        <button
                            key={id}
                            onClick={() => { setSelectedTab(id); setShowSidebar(false); }}
                            className={`flex items-center w-full p-4 rounded-2xl text-left transition-all duration-300 transform hover:scale-105 ${selectedTab === id
                                ? "bg-white/20 text-white shadow-lg backdrop-blur-sm"
                                : "hover:bg-white/10 text-indigo-100"
                                }`}
                        >
                            <Icon className="w-5 h-5 mr-3" />
                            {label}
                            {selectedTab === id && (
                                <div className="ml-auto w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                            )}
                        </button>
                    ))}
                </nav>

                <div className="mt-8 pt-6 border-t border-white/20">
                    <button
                        onClick={handleLogout}
                        disabled={isLoading}
                        className="flex items-center w-full p-4 rounded-2xl text-left text-red-300 hover:bg-red-500/20 hover:text-white transition-all duration-300 transform hover:scale-105 disabled:opacity-50"
                    >
                        {isLoading ? (
                            <div className="w-5 h-5 mr-3 border-2 border-red-300 border-t-transparent rounded-full animate-spin"></div>
                        ) : (
                            <LogOut className="w-5 h-5 mr-3" />
                        )}
                        {isLoading ? t("loggingOut") : t("logout")}
                    </button>
                </div>
            </div>

            {/* Enhanced Overlay */}
            {showSidebar && (
                <div
                    onClick={() => setShowSidebar(false)}
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden transition-all duration-300"
                />
            )}

            {/* Main Content Area */}
            <div className="flex-1 min-w-0">
                {/* Enhanced Header */}
                <div className="sticky top-0 z-30 bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-200/50">
                    <div className="flex justify-between items-center p-4 lg:p-6">
                        <div className="flex items-center space-x-4">
                            <button
                                onClick={() => setShowSidebar(true)}
                                className="md:hidden p-3 rounded-2xl bg-indigo-100 hover:bg-indigo-200 transition-all duration-200 transform hover:scale-105"
                            >
                                <Menu className="w-6 h-6 text-indigo-700" />
                            </button>

                            <div className="hidden md:block">
                                <h1 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                                    {selectedTab === "dashboard" && t("ownerDashboard")}
                                    {selectedTab === "history" && t("appointmentHistory")}
                                    {selectedTab === "reports" && t("reportsAnalytics")}
                                </h1>
                                <p className="text-gray-500 mt-1">
                                    {new Date().toLocaleDateString('en-US', {
                                        weekday: 'long',
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            {/* Language Selector */}
                            <div className="relative">
                                <button
                                    onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
                                    className="flex items-center gap-2 p-3 rounded-2xl bg-gradient-to-r from-green-100 to-emerald-100 hover:from-green-200 hover:to-emerald-200 transition-all duration-200 transform hover:scale-105"
                                >
                                    <Globe className="w-5 h-5 text-green-700" />
                                    <span className="text-green-700 font-medium">
                                        {languages.find(lang => lang.code === currentLanguage)?.flag}
                                    </span>
                                    <span className="hidden sm:inline text-green-700 text-sm">
                                        {languages.find(lang => lang.code === currentLanguage)?.name}
                                    </span>
                                </button>

                                {showLanguageDropdown && (
                                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-2xl shadow-2xl border border-gray-200 z-50 overflow-hidden">
                                        <div className="p-2">
                                            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-3 py-2">
                                                {t("language")}
                                            </div>
                                            {languages.map((language) => (
                                                <button
                                                    key={language.code}
                                                    onClick={() => {
                                                        setCurrentLanguage(language.code);
                                                        setShowLanguageDropdown(false);
                                                    }}
                                                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl text-left hover:bg-gray-50 transition-colors duration-200 ${currentLanguage === language.code ? 'bg-green-50 text-green-700' : 'text-gray-700'
                                                        }`}
                                                >
                                                    <span className="text-lg">{language.flag}</span>
                                                    <span className="font-medium">{language.name}</span>
                                                    {currentLanguage === language.code && (
                                                        <div className="ml-auto w-2 h-2 bg-green-500 rounded-full"></div>
                                                    )}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Enhanced Notifications */}
                            <div className="relative">
                                <button
                                    onClick={() => setShowNotifications(!showNotifications)}
                                    className="relative p-3 rounded-2xl bg-gradient-to-r from-blue-100 to-indigo-100 hover:from-blue-200 hover:to-indigo-200 transition-all duration-200 transform hover:scale-105"
                                >
                                    <Bell className="w-6 h-6 text-indigo-700" />
                                    {notifications.length > 0 && (
                                        <span className="absolute -top-1 -right-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs w-6 h-6 flex items-center justify-center rounded-full border-2 border-white animate-bounce">
                                            {notifications.length}
                                        </span>
                                    )}
                                </button>

                                {showNotifications && (
                                    <div className="absolute right-0 mt-4 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 z-50 transform transition-all duration-300 ease-out scale-100 opacity-100">
                                        <div className="p-4 border-b border-gray-200">
                                            <div className="flex items-center justify-between">
                                                <h3 className="font-bold text-lg text-gray-800">{t("notifications")}</h3>
                                                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                                                    {notifications.length}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="max-h-80 overflow-y-auto">
                                            {notifications.length > 0 ? (
                                                notifications.map((notification) => (
                                                    <div
                                                        key={notification.id}
                                                        className="p-4 border-b border-gray-100 last:border-none hover:bg-gray-50 transition-colors duration-200"
                                                    >
                                                        <div className="flex items-start space-x-3">
                                                            {getNotificationIcon(notification.type)}
                                                            <div className="flex-1">
                                                                <p className="text-sm text-gray-800 leading-relaxed">
                                                                    {t(notification.message)}
                                                                </p>
                                                                <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))
                                            ) : (
                                                <div className="p-8 text-center">
                                                    <Bell className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                                                    <p className="text-gray-500">{t("noNewNotifications")}</p>
                                                </div>
                                            )}
                                        </div>
                                        {notifications.length > 0 && (
                                            <div className="p-4 border-t border-gray-200">
                                                <button
                                                    onClick={clearNotifications}
                                                    className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-2.5 rounded-xl hover:from-indigo-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
                                                >
                                                    {t("clearAllNotifications")}
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content Area */}
                <div className="p-4 lg:p-6">
                    {renderContent()}
                </div>
            </div>
        </div>
    );
}