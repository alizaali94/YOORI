## YOORI - Laravel Vue Multi-Vendor PWA eCommerce CMS

Yoori is a modern and versatile template built on Laravel and Vue.js, designed to streamline the development of web applications.

## Features

- Clean and responsive user interface.
- Integration of Laravel's backend capabilities with Vue.js's frontend functionalities.
- Pre-built components for rapid development.
- Authentication system included.
- Modular architecture for scalability and efficiency.

## Installation

### Prerequisites

- PHP >= 7.3
- Composer (https://getcomposer.org/)
- Node.js (https://nodejs.org/)
- npm (comes with Node.js)
- MySQL or any other compatible database system

### Steps

1. Clone the repository:

```bash
git clone https://github.com/alizaali94/YOORI.git
```

2. Navigate to the project directory:

```bash
cd YOORI
```

3. Install PHP dependencies:

```bash
composer install
```

4. Install JavaScript dependencies:

```bash
npm install
```

5. Create a copy of the .env.example file and rename it to .env. Update the database configuration with your credentials:

```bash
cp .env.example .env
```

6. Generate the application key:

```bash
php artisan key:generate
```

7. Run database migrations:

```bash
php artisan migrate
```

8. Compile assets:

```bash
npm run dev
```

9. Serve the application:

```bash
php artisan serve
```

10. Access the application in your browser at http://localhost:8000.

## Usage
- Customize the template according to your project requirements.
- Leverage pre-built components and modules for rapid development.
- Integrate additional features as needed.

## License
This project is licensed under the [MIT License](https://opensource.org/license/mit) see the LICENSE file for details.

## Acknowledgments
- Yoori template is built using Laravel and Vue.js.
- Special thanks to the open-source community for their contributions.




