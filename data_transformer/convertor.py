import numpy as np
import pandas as pd
import re

df = pd.read_csv('./data.csv', encoding='UTF-8')

variable = df[df["Tipo"] == "variable"]
simple = df[df["Tipo"] == "simple"]
repited_products =[]

for name in variable["Nombre"]:
    fullProduct = ""
    key = ""
    item = re.findall(r'[A-Za-z_ÑñÁáÉéÍíÓóÚú]+', name)
    # print(item)
    for word in item:
        if word == item[0]:
            fullProduct = word
        elif word == "para":
            pass
        elif not word[0].isupper():
            fullProduct += " " + word
            key = word
        elif key == "con" or key == "de" or key == "y":
            fullProduct += " " + word
            key = ""

    repited_products.append(fullProduct)

variable = pd.Series(repited_products).unique()
simple = pd.Series(simple["Nombre"]).unique()

products = pd.DataFrame([variable, simple]).transpose()

products.to_csv('./products.csv', index=False)
# print(products)
print(pd.read_csv('./products.csv', encoding='UTF-8'))