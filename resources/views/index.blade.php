<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>{{ $title }}</title>
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;0,700;1,400&display=swap" />
    <link rel="stylesheet" href="{{ asset('vendor/fontawesome/css/all.min.css') }}" rel="stylesheet">
    @vite(['resources/css/app.css', 'resources/js/app.js'])
    <link rel="stylesheet" href="{{ asset('css/styles.min.css') }}">
</head>

<body>
    {{-- <!-- Navigation --> --}}
    <nav class="navbar fixed-top">
        <div class="container sm:px-4 lg:px-8 flex flex-wrap items-center justify-between lg:flex-nowrap">
            <a class="inline-block mr-4 py-0.5 font-bold text-3xl text-black whitespace-nowrap hover:no-underline focus:no-underline"
                href="index.html">
                <img src="{{ asset('img/smart-farming.png') }}" alt="alternative" class="h-8 me-1 inline" />
                Smart Farming
            </a>
            <button
                class="background-transparent rounded text-xl leading-none hover:no-underline focus:no-underline lg:hidden lg:text-gray-400"
                type="button" data-toggle="offcanvas">
                <i class="fa-solid fa-bars fa-lg"></i>
            </button>
            <div class="navbar-collapse offcanvas-collapse lg:flex lg:flex-grow lg:items-center"
                id="navbarsExampleDefault">
                <ul class="pl-0 mt-3 mb-2 ml-auto flex flex-col list-none lg:mt-0 lg:mb-0 lg:flex-row">
                    <li>
                        <a class="nav-link page-scroll active" href="#header">Home <span
                                class="sr-only">(current)</span></a>
                    </li>
                    <li>
                        <a class="nav-link page-scroll" href="#features">Features</a>
                    </li>
                    <li>
                        <a class="nav-link page-scroll" href="#services">Services</a>
                    </li>
                </ul>

                <span class="block lg:ml-3.5">
                    <a class="font-semibold bg-indigo-600 text-white border border-indigo-600 hover:bg-transparent hover:text-indigo-600 rounded-full px-7 py-2"
                        href="{{ route('login') }}">Login<i class="fa-solid fa-right-to-bracket ms-2"></i></a>
                </span>
            </div>
        </div>
    </nav>
    {{-- <!-- end of navbar --> --}}

    {{-- <!-- Header --> --}}
    <header id="header" class="header py-28 text-center md:pt-36 lg:text-left xl:pt-44 xl:pb-32">
        <div class="container px-4 sm:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
            <div class="mb-16 lg:mt-8 xl:mt-10 xl:mr-12">
                <h1 class="h1-large mb-5">Smart Farming: Sistem Monitoring IoT dengan Algoritma Change Detection</h1>
                <p class="p-large mb-8">Pengiriman data dan penyimpanan data sensor yang lebih sedikit</p>
                <a class="font-semibold bg-indigo-600 text-white border border-indigo-600 hover:bg-transparent hover:text-indigo-600 rounded-full px-9 py-4"
                    href="{{ route('login') }}">Login<i class="fa-solid fa-right-to-bracket ms-2"></i></a>
            </div>
            <div class="xl:text-right">
                <img class="inline" src="{{ asset('img/smart-farming.png') }}" alt="smart-farming" />
            </div>
        </div>
    </header>
    {{-- <!-- end of header --> --}}

    {{-- <!-- Introduction --> --}}
    <div class="pt-4 pb-14 text-center bg-white">
        <div class="container px-4 sm:px-8 xl:px-4">
            <p class="mb-4 text-gray-800 text-3xl leading-10 lg:max-w-5xl lg:mx-auto">
                Algoritma change detection digunakan untuk mendeteksi perubahan data sensor sehingga dapat mengurangi
                pengiriman dan penyimpanan data data sensor.</p>
        </div>
    </div>
    {{-- <!-- end of introduction --> --}}

    {{-- <!-- Features --> --}}
    <div id="features" class="cards-1 bg-white">
        <div class="container px-4 sm:px-8 xl:px-4">
            <div class="card min-h-[28rem]">
                <div class="card-image">
                    <img src="{{ asset('img/file-transfer.png') }}" alt="pengiriman data" />
                </div>
                <div class="card-body">
                    <h5 class="card-title">Pengiriman Data Berkurang</h5>
                    <p class="mb-4">
                        Algoritma change detection memungkinkan pengiriman data yang lebih sedikit dengan
                        hanya mengirimkan informasi yang berubah, mengurangi beban jaringan dan waktu yang diperlukan
                        untuk mentransfer data.
                    </p>
                </div>
            </div>
            <div class="card min-h-[28rem]">
                <div class="card-image">
                    <img src="{{ asset('img/data-storage.png') }}" alt="penyimpanan data" />
                </div>
                <div class="card-body">
                    <h5 class="card-title">Penyimpanan Data Lebih Hemat</h5>
                    <p class="mb-4">
                        Dengan meminimalkan pengiriman data, maka penghematan pada
                        penyimpanan data dapat dilakukan dan mengurangi kebutuhan akan ukuran penyimpanan.
                    </p>
                </div>
            </div>
            <div class="card min-h-[28rem]">
                <div class="card-image">
                    <img src="{{ asset('img/bandwidth.png') }}" alt="bandwidth" />
                </div>
                <div class="card-body">
                    <h5 class="card-title">Menggunakan Bandwidth Kecil</h5>
                    <p class="mb-4">
                        Dengan mengurangi jumlah data yang dikirim maka penggunaan bandwidth menjadi lebih sedikit.
                    </p>
                </div>
            </div>
        </div>
    </div>
    {{-- <!-- end of features --> --}}

    {{-- <!-- Services 1 --> --}}
    <div id="services" class="pt-12 pb-16 lg:pt-16 bg-white">
        <div class="container px-4 sm:px-8 lg:grid lg:grid-cols-12 lg:gap-x-12">
            <div class="lg:col-span-5">
                <div class="mb-16 lg:mb-0 xl:mt-16">
                    <h2 class="mb-6">Soil Moisture</h2>
                    <h5 class="mb-4">Pemantauan Kelembaban Tanah</h5>
                    <p class="mb-4">Pemantauan kelembaban tanah memungkinkan untuk mengukur tingkat kelembaban tanah
                        pada tanaman secara real-time untuk memastikan tanaman mendapatkan air yang cukup,
                        mengoptimalkan pertumbuhan dan perawatan tanaman untuk hasil yang lebih baik.</p>
                </div>
            </div>
            <div class="lg:col-span-7 flex items-center justify-center">
                <div class="xl:ml-14">
                    <img class="inline max-w-xs" src="{{ asset('img/soil-moisture-sensor.png') }}"
                        alt="soil moisture" />
                </div>
            </div>
        </div>
    </div>
    {{-- <!-- end of services 1 --> --}}

    {{-- <!-- Services 2 --> --}}
    <div class="py-24 bg-white">
        <div class="container px-4 sm:px-8 lg:grid lg:grid-cols-12 lg:gap-x-12">
            <div class="lg:col-span-7 flex items-center justify-center">
                <div class="mb-12 lg:mb-0 xl:mr-14">
                    <img class="inline max-w-xs" src="{{ asset('img/thermometer.png') }}" alt="temperature" />
                </div>
            </div>
            <div class="lg:col-span-5">
                <div class="xl:mt-12">
                    <h2 class="mb-6">Temperature</h2>
                    <h5 class="mb-4">Pemantauan Suhu</h5>
                    <p class="mb-4">Pemantauan suhu memungkinkan untuk memantau suhu lingkungan di sekitar
                        tanaman. Dengan adanya informasi ini, maka dapat melakukan identifikasi perubahan suhu yang
                        signifikan yang dapat memengaruhi kesehatan tanaman.</p>
                </div>
            </div>
        </div>
    </div>
    {{-- <!-- end of services 2 --> --}}

    {{-- <!-- Services 3 --> --}}
    <div class="pt-16 pb-12 bg-white">
        <div class="container px-4 sm:px-8 lg:grid lg:grid-cols-12 lg:gap-x-12">
            <div class="lg:col-span-5">
                <div class="mb-16 lg:mb-0 xl:mt-16">
                    <h2 class="mb-6">Humidity</h2>
                    <h5 class="mb-4">Pemantauan Kelembaban Udara</h5>
                    <p class="mb-4">Pemantauan kelembaban udara memungkinkan untuk mengukur tingkat kelembaban
                        di udara sekitar tanaman. Informasi ini penting untuk mengoptimalkan kondisi pertumbuhan
                        tanaman dan mencegah masalah yang disebabkan oleh kelembaban yang tidak seimbang, mencegah
                        potensi penyakit, dan memastikan lingkungan yang ideal bagi pertumbuhan tanaman.</p>
                </div>
            </div>
            <div class="lg:col-span-7 flex items-center justify-center">
                <div class="ml-14">
                    <img class="inline max-w-xs" src="{{ asset('img/humidity.png') }}" alt="humidity" />
                </div>
            </div>
        </div>
    </div>
    {{-- <!-- end of services 3 --> --}}

    {{-- <!-- Footer --> --}}
    <div class="footer">
        <div class="container px-4 sm:px-8">
            <div class="social-container">
                <span class="fa-stack">
                    <a href="#">
                        <i class="fas fa-circle fa-stack-2x"></i>
                        <i class="fab fa-facebook-f fa-stack-1x"></i>
                    </a>
                </span>
                <span class="fa-stack">
                    <a href="#">
                        <i class="fas fa-circle fa-stack-2x"></i>
                        <i class="fab fa-twitter fa-stack-1x"></i>
                    </a>
                </span>
                <span class="fa-stack">
                    <a href="#">
                        <i class="fas fa-circle fa-stack-2x"></i>
                        <i class="fab fa-instagram fa-stack-1x"></i>
                    </a>
                </span>
                <span class="fa-stack">
                    <a href="#">
                        <i class="fas fa-circle fa-stack-2x"></i>
                        <i class="fab fa-youtube fa-stack-1x"></i>
                    </a>
                </span>
            </div>
        </div>
    </div>
    {{-- <!-- end of footer --> --}}

    {{-- <!-- Copyright --> --}}
    <div class="copyright">
        <div class="container px-4 sm:px-8">
            <p class="pb-2 p-small text-center">Copyright © <a href="https://iotcenter.cloud"
                    class="no-underline">IoT Center</a> 2024</p>
        </div>
    </div>
    {{-- <!-- end of copyright --> --}}

    {{-- <!-- back to top button --> --}}
    <a href="#header"
        class="back-to-top page-scroll fixed bottom-3 right-3 z-[9999] hidden h-11 w-11 items-center justify-center rounded-full bg-slate-700 p-4 hover:bg-slate-950 "
        title="Back to Top">
        <i class="fa-solid fa-angle-up fa-xl text-gray-50"></i>
    </a>
    {{-- <!-- end of back to top button --> --}}

    <script src="{{ asset('vendor/jquery/jquery.min.js') }}"></script>
    <script src="{{ asset('vendor/jquery-easing/jquery.easing.min.js') }}"></script>
    <script src="{{ asset('js/scripts.min.js') }}"></script>
</body>

</html>
