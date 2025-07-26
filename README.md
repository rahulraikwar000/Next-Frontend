# Supreme Group Dashboard (Next.js + Tailwind CSS + Redux Toolkit)

This project is a fully responsive web dashboard built using **Next.js**, **Tailwind CSS**, **Redux Toolkit**, and custom Webpack configuration. It showcases a simple layout with a counter feature to demonstrate Redux integration and UI components.

## 🚀 Project Setup Instructions

### 1. Clone the Repository

```bash
git clone https://your-repo-url.git
cd my-next-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

---

## Component Architecture Overview

- `components/`
  - `Header.tsx`: Displays the top banner with the app name.
  - `Footer.tsx`: Footer with branding.
  - `AnimatedHero.tsx`: It is used for presenting passenger and commercial vehicles with smooth and visually appealing animations.
  - `ContactForm.tsx`: It provides a form for users to get in touch, allowing them to submit inquiries or messages easily..
  - `HeroBanner.tsx`:  It displays the main banner section with a prominent title, subtitle, and background, creating a strong first impression on the page.
    - `SwiperSlider.tsx`: It provides a responsive and interactive image or content slider using Swiper, ideal for showcasing multiple items in a smooth, swipeable layout.


- `pages/`
  - `index.tsx`: Main dashboard with Banner and AnimatedHero and ConatctForm sections.
  - `_app.tsx`: Configures the Redux provider and global styles.
- `redux/`
  - `store.ts`: Redux store setup.
  - `slices/counterSlice.ts`: Contains a simple counter reducer.
- `styles/globals.css`: Tailwind CSS imports and global styles.

---

## Responsive Design Strategy

Responsive layout is achieved using **Tailwind CSS utility classes**:
- Flexbox and grid for layout.
- Responsive units like `w-full`, `h-60`, `text-xl`, etc.
- Media breakpoints (e.g., `md:`, `lg:`) can be easily added as needed.

---

## Performance Optimization Techniques Employed

- **Static generation** (Next.js) and lightweight components.
- **Redux Toolkit** for efficient state management.
- **Code splitting** handled by Next.js automatically.
- **CSS optimization** via Tailwind’s JIT mode.
- **Image Optimization** using Next.js next/image for responsive and compressed image delivery.
- **Memoization** with React.memo, useMemo, and useCallback to prevent unnecessary re-renders..
- **Efficient Animations** using Framer Motion with conditional rendering and minimal animation overhead.

---

## Accessibility Considerations

- Semantic HTML (`<header>`, `<main>`, `<footer>`) used.
- Clear focus states and readable font sizes.
- Color contrast using Tailwind’s accessible palette.
- Can be extended with ARIA roles and screen reader support.

---

## Third-Party Libraries Used

- [`next`](https://nextjs.org/): React framework for SSR/SSG.
- [`tailwindcss`](https://tailwindcss.com/): Utility-first CSS framework.
- [`@reduxjs/toolkit`](https://redux-toolkit.js.org/): Simplified Redux setup.
- [`react-redux`](https://react-redux.js.org/): Connects React with Redux.


## React-Toastify Integration

**React-Toastify** is used for toast notifications. Usage:

### Installation

```bash
npm install react-toastify
```

### Example Usage

```tsx
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.success('Operation successful!');
return <ToastContainer />;
```

To customize, refer to: [https://fkhadra.github.io/react-toastify/introduction](https://fkhadra.github.io/react-toastify/introduction)

---

## Form Handling with Formik + Yup

**Formik** is used for form state management and **Yup** for schema validation.

### Installation

```bash
npm install formik yup
```

### Example Usage

```tsx
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email').required('Required'),
});

<Formik
  initialValues={{ email: '' }}
  validationSchema={validationSchema}
  onSubmit={(values) => console.log(values)}
>
  <Form>
    <Field name="email" type="email" />
    <ErrorMessage name="email" component="div" />
    <button type="submit">Submit</button>
  </Form>
</Formik>
```

Formik simplifies form state, and Yup ensures robust validation.

---

## Assumptions & Decisions

- `pages/` directory was chosen over `app/` for simpler routing.
- Counter was added to showcase Redux integration.
- Initial design assumes a single-page dashboard with expandable components.
- Webpack is extended for future customization needs.
- Toasts are added using `react-toastify` to enhance UX.
- Form handling is managed by `formik` and validated using `yup`.

Simplified Redux Setup @reduxjs/toolkit: 

I implemented Redux Toolkit to manage global state in a clean, efficient, and scalable way. Traditional Redux setups can become verbose and boilerplate-heavy, especially as the application grows. Redux Toolkit simplifies this by providing:
1. Pre-configured store setup with sensible defaults
2. Slices that combine actions and reducers for better code organization
3. createAsyncThunk for handling asynchronous logic like API calls
4. Built-in Immer.js for writing immutable logic in a more readable way
5. Better TypeScript support, reducing type-related errors
6. Cleaner code and reduced boilerplate, making it easier to maintain

---

## Challenges & Potential Solutions

**Challenges:**
- I faced many issues while working with Framer Motion. Although its configuration is easy, it often throws a lot of errors when used with TypeScript and Next.js.

**Solutions:**
- To overcome these issues, I carefully read the official documentation to understand what types of props, attributes, and styles I could use to achieve the desired design and pixel-perfect animations. I followed the documentation closely and implemented everything as recommended, which helped me resolve the problems effectively.

---

## Suggested Upcoming Features & Improvements

- Full sidebar navigation.
- Dashboard cards and analytics widgets.
- Dark mode toggle.
- Internationalization (i18n).
- Unit and integration tests (Jest + React Testing Library).
- Mobile-first improvements.
- Server-side Rendering (SSR).

---

## Additional Remarks

This project serves as a base template for scalable, responsive web apps using modern frontend technologies. Feel free to customize the structure and styling as per your needs.

First of all, sorry for the delay. I’m currently working at my present company where I’m serving my notice period, and because of that, I couldn't complete this template on the same day. I had very limited time and was only able to spend less than 10 hours on this template.

Due to the time constraints, I couldn’t make it fully pixel-perfect. However, I believe I could have made it much better than the current implementation if I had more time. There are still several code optimization techniques and improvements that I could have applied, and in terms of UI, I could have made it fully pixel-perfect as well.


---

**Author:** [Rahul Raikwar]  
**License:** MIT---