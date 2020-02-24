pipeline {
    agent {
        docker { 
            image "papitoio/nodewd"
            args "--network=skynet"
        }
    }
    stages {
        stage('Build') {
            steps {
                sh "npm install"
            }
            
        }
        stage('Tests') {
            steps {
                sh "npm run test:ci"
            }
            post {
                always {
                    junit testDataPublishers:[[$class: 'AttachmentPublisher']], testResults: "tests_output/**/*.xml"
                }
            }
        }
    }
}
