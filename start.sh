#!/bin/sh
cd time_api
gunicorn --bind 0.0.0.0:5000 main:app --daemon
cd ../counter_api
gunicorn --bind 0.0.0.0:5001 main:app --daemon