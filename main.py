import os
from flask import Flask, render_template, redirect, url_for

app = Flask(__name__)

@app.route("/")
def root():
    return redirect(url_for("home"))  # redirect / → /index

@app.route("/index")
def home():
    return render_template("index.html")

@app.route("/index.html")
def home_redirect():
    return redirect(url_for("home"))

@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/about.html")
def about_redirect():
    return redirect(url_for("about"))

@app.route("/contact")
def contact():
    return render_template("contact.html")

@app.route("/contact.html")
def contact_redirect():
    return redirect(url_for("contact"))

@app.route("/services")
def services():
    return render_template("services.html")

@app.route("/services.html")
def services_redirect():
    return redirect(url_for("services"))

@app.route("/solutions")
def solutions():
    return render_template("solutions.html")

@app.route("/solutions.html")
def solutions_redirect():
    return redirect(url_for("solutions"))

@app.route("/product")
def product():
    return render_template("product.html")

@app.route("/product.html")
def product_redirect():
    return redirect(url_for("product"))

@app.route("/product-openshift")
def product_openshift():
    return render_template("product-openshift.html")

@app.route("/product-openshift.html")
def product_openshift_redirect():
    return redirect(url_for("product_openshift"))

@app.route("/product-costoptimizer")
def product_costoptimizer():
    return render_template("product-costoptimizer.html")

@app.route("/product-costoptimizer.html")
def product_costoptimizer_redirect():
    return redirect(url_for("product_costoptimizer"))

@app.route("/product-cicd")
def product_cicd():
    return render_template("product-cicd.html")

@app.route("/product-cicd.html")
def product_cicd_redirect():
    return redirect(url_for("product_cicd"))

@app.route("/company")
def company():
    return render_template("company.html")

@app.route("/company.html")
def company_redirect():
    return redirect(url_for("company"))

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))  # Defaults to 5000 locally
    app.run(host="0.0.0.0", port=port)
from flask import send_from_directory
import os

@app.route('/<path:filename>')
def serve_static_files(filename):
    return send_from_directory(os.path.join(app.root_path, 'static'), filename)
