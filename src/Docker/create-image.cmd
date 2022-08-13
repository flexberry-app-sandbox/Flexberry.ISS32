docker build --no-cache -f SQL\Dockerfile.PostgreSql -t iss32/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t iss32/app ../..
