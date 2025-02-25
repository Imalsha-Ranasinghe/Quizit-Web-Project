pipeline {
    agent any

    environment {
        MONGO_URI = credentials('mongodb+srv://ninada:6vHGa6tte7glAo45@cluster0.w3g4i.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
        JWT_SECRET = credentials('NINADA_IMALSHA')
    }

    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/Imalsha-Ranasinghe/Quizit-Web-Project'
            }
        }

        stage('Build Backend') {
            steps {
                script {
                    sh '''
                    cd backend
                    npm install
                    npm run build
                    '''
                }
            }
        }

        stage('Run Tests') {
            steps {
                script {
                    sh '''
                    cd backend
                    npm test
                    '''
                }
            }
        }

        stage('Build Docker Images') {
            steps {
                script {
                    sh '''
                    docker-compose build
                    '''
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    sh '''
                    docker-compose up -d
                    '''
                }
            }
        }
    }
}
