# Use uma imagem base com Java 20
FROM openjdk:20-jdk-slim

# Defina o diretório de trabalho dentro do container
WORKDIR /app

COPY target/spring-boot-and-kotlin*.jar /app/app.jar

# Exponha a porta que sua aplicação Spring Boot utiliza
EXPOSE 8080

# Comando para iniciar a aplicação
CMD ["java", "-jar", "app.jar"]