# Programmer Quiz

A comprehensive quiz application designed for programmers to test their knowledge across various programming topics and difficulty levels.

## 🖼️ Screenshots

<img width="1152" height="579" alt="showcase 1" src="https://github.com/user-attachments/assets/b335ab12-ae35-4340-8956-214311799c14" />
<img width="1152" height="579" alt="showcase 2" src="https://github.com/user-attachments/assets/4c8a343d-6712-4a74-9eaa-25ff1610f581" />
<img width="1152" height="579" alt="showcase 3" src="https://github.com/user-attachments/assets/13556043-ce8e-4387-b67f-d8c9ce59f367" />


## 🚀 Features

- **Multi-language Support**: Quiz questions in C++, C#, JavaScript, React, Software Development, TypeScript, and Web Development
- **Difficulty Levels**: Easy, Medium, and Hard difficulty options
- **Interactive UI**: Modern, responsive design with intuitive navigation
- **Performance Tracking**: Results analysis and performance charts
- **State Management**: Efficient state handling using Zustand
- **Data Persistence**: Cache management for improved performance

## 🛠️ Tech Stack

- **Framework**: Next.js 16.1.3 (App Router)
- **Language**: TypeScript 5
- **UI Library**: Tailwind CSS with DaisyUI components
- **State Management**: Zustand
- **Charts**: Chart.js with React Chart.js 2
- **Icons**: Font Awesome
- **Performance**: React 19.2.3, use-debounce

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
├── components/            # Reusable UI components
├── data/                  # Quiz question data files
├── hooks/                 # Custom React hooks
├── lib/                   # Utility libraries
├── store/                 # Zustand global state stores
├── types/                 # TypeScript type definitions
├── utils/                 # Utility functions
```

## 🎮 How to Use

1. **Start the Development Server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

2. **Access the Application**
   Open [http://localhost:3000](http://localhost:3000) in your browser

3. **Navigation**
   - Select topics of interest
   - Choose difficulty level
   - Start quiz and answer questions
   - View results and performance analysis

## 📊 Quiz Sections

### Available Topics

- C++
- C#
- JavaScript
- React
- Software Development
- TypeScript
- Web Development

### Difficulty Levels

- Easy
- Medium
- Hard

## 📈 Performance Analysis

The application includes:

- Results page with detailed performance metrics
- Data visualization using Chart.js
- Topic-wise performance tracking

## 📦 Dependencies

### Core Dependencies

- `next`: 16.1.3
- `react`: 19.2.3
- `react-dom`: 19.2.3
- `zustand`: 5.0.10
- `chart.js`: 4.5.1
- `daisyui`: 5.5.14

### Development Dependencies

- `typescript`: 5
- `eslint`: 9
- `tailwindcss`: 4.1.18
- `prettier`: 3.8.0

## 📝 Development

### Available Scripts

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run start      # Start production server
npm run lint       # Run ESLint
```

### Key Components

- `startGameModal` - Initial quiz setup
- `quizPage` - Main quiz interface
- `results` - Performance analysis
- `sidebar` - Topic selection
- `navbar` - Navigation bar

### State Management

- `useQuizGameStore` - Quiz game state
- `useSelectedTopicsStore` - Selected topics
- `useDifficultyModalStore` - Difficulty selection
- `useStartModalStore` - Start modal state
- `useDataStore` - Data management
- `useComfirmModalStore` - Confirmation modal

## 🎨 Styling

- **Tailwind CSS**: Utility-first CSS framework
- **DaisyUI**: Component library built on Tailwind
- **Responsive Design**: Mobile-first approach
- **Custom Themes**: Tailwind configuration

## 📊 Data Management

### Data Sources

- JSON files for each topic and difficulty level
- Cache store for improved performance
- Data validation and sanitization

### Data Types

- `answer.d.ts`
- `data.d.ts`
- `quizGameOptions.d.ts`
- `quizQuestion.d.ts`
- `topic.d.ts`

## 🔒 Security Considerations

- Input validation for all user interactions
- Secure API routes for quiz validation

## 🚀 Deployment

Deploy to Netlify using the official deployment documentation:
[Next.js Deployment Documentation](https://nextjs.org/docs/app/building-your-application/deploying)

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgements

- [Next.js](https://nextjs.org)
- [React](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [DaisyUI](https://daisyui.com)
- [Font Awesome](https://fontawesome.com)
- [Chart.js](https://www.chartjs.org)

---

_Built with Next.js, React, and TypeScript_
