import io
import requests
import time
import json
import os

baseurl='http://localhost:8080'

start = time.time();
for i in range(3000,4000):
    start1 = time.time();
    res = requests.post(baseurl)
    # print(res);
    print(time.time() - start1);

print(time.time() - start)