"use client"

import { Star } from "lucide-react";
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useCartStore } from "@/Store/Store"

const Page = () => {
    const navigate = useRouter();
    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState("");
    const [loading, setLoading] = useState(false);
    const [otpSent, setOtpSent] = useState(false);
    const [showSuccessPopup, setShowSuccessPopup] = useState(false);
    const [showOtpSuccessPopup, setShowOtpSuccessPopup] = useState(false);
    const [isVerified, setIsVerified] = useState(false);
    const [error, setError] = useState("");
    
    // Billing details state
    const [billingDetails, setBillingDetails] = useState({
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        postCode: "",
        country: "",
        regionState: ""
    });
    
    // Get cart data from Zustand store
    const { cart, clearCart, getTotalPrice } = useCartStore();
    const [deliveryCharges] = useState(20.00);

    // Calculate subtotal from Zustand store
    const subtotal = getTotalPrice();

    // Calculate total
    const total = subtotal + deliveryCharges;

    const handleRequestOtp = async () => {
        if (!email) {
            setError("Please enter your email");
            return;
        }

        setLoading(true);
        setError("");

        try {
            const response = await fetch("https://foodzybackend.vercel.app/api/v1/auth/request-otp", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();

            if (response.ok) {
                setShowOtpSuccessPopup(true);
                setTimeout(() => {
                    setShowOtpSuccessPopup(false);
                    setOtpSent(true);
                }, 2000);
                setError("");
            } else {
                setError(data.message || "Failed to send OTP");
            }
        } catch (err) {
            setError("An error occurred. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const handleVerifyOtp = async () => {
        if (!otp) {
            setError("Please enter the OTP");
            return;
        }

        setLoading(true);
        setError("");

        try {
            const response = await fetch("https://foodzybackend.vercel.app/api/v1/auth/verify-otp", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ 
                    email, 
                    otp: parseInt(otp) 
                }),
            });

            const data = await response.json();

            if (response.ok) {
                // Store token in localStorage
                if (data.token) {
                    localStorage.setItem('authToken', data.token);
                }
                setIsVerified(true);
                setError("");
            } else {
                setError(data.message || "Invalid OTP");
            }
        } catch (err) {
            setError("An error occurred. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const handlePlaceOrder = async () => {
        // Validate billing details
        if (!billingDetails.firstName || !billingDetails.lastName || !billingDetails.city || !billingDetails.country) {
            setError("Please fill in all required fields");
            return;
        }

        if (cart.length === 0) {
            setError("Your cart is empty");
            return;
        }

        setLoading(true);
        setError("");

        try {
            const token = localStorage.getItem('authToken');
            
            if (!token) {
                setError("Please verify your email first");
                return;
            }

            // Prepare products array
            const products = cart.map((item: any) => ({
                id: item.id,
                quantity: item.quantity
            }));

            const orderData = {
                products,
                shipping: billingDetails
            };

            const response = await fetch("https://foodzybackend.vercel.app/api/v1/order/place", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify(orderData),
            });

            const data = await response.json();

            if (response.ok) {
                setShowSuccessPopup(true);
                clearCart();
                
                setTimeout(() => {
                    navigate.push("/");
                }, 2000);
            } else {
                setError(data.message || "Failed to place order");
            }
        } catch (err) {
            setError("An error occurred. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const handleBillingChange = (field: string, value: string) => {
        setBillingDetails(prev => ({
            ...prev,
            [field]: value
        }));
    };

    return (
        <div className="mb-6">
            {/* OTP Success Popup */}
            {showOtpSuccessPopup && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-8 max-w-md mx-4 text-center shadow-xl">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-semibold text-gray-800 mb-2">OTP Sent Successfully!</h3>
                        <p className="text-gray-600">Please check your email for the verification code.</p>
                    </div>
                </div>
            )}

            {/* Order Success Popup */}
            {showSuccessPopup && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-8 max-w-md mx-4 text-center shadow-xl">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-semibold text-gray-800 mb-2">Order Placed Successfully!</h3>
                        <p className="text-gray-600">Redirecting you to home page...</p>
                    </div>
                </div>
            )}

            <div className='w-full bg-[#F53E32] mt-6 mb-6'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6'>
                    <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0'>
                        <span className='text-white font-semibold text-lg sm:text-base'>Products</span>

                        <div className="flex gap-2 sm:gap-4 hover:cursor-pointer text-white text-sm sm:text-base">
                            <span onClick={() => navigate.push("/")}>Home</span>
                            <span>-</span>
                            <span>Checkout</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-4 lg:gap-2">
                
                    <div className="w-full lg:w-[440px] flex flex-col gap-5 items-center lg:items-start">
                        
                        <div className="w-full max-w-[416px] border border-[#E9E9E9] rounded-[5px] px-4 py-4 flex flex-col gap-4">
                            <span className="text-[20px] font-semibold font-poppins leading-6 text-[#000000]">Summary</span>
                            <div className="w-full flex flex-col gap-4">
                                <div className="w-full flex justify-between">
                                    <span className="text-[14px] leading-6 text-[#7A7A7A]">Sub-Total</span>
                                    <span className="font-medium text-[15px] leading-6 text-[#000000]">${subtotal.toFixed(2)}</span>
                                </div>

                                <div className="w-full flex justify-between">
                                    <span className="text-[14px] leading-6 text-[#7A7A7A]">Delivery Charges</span>
                                    <span className="font-medium text-[15px] leading-6 text-[#000000]">${deliveryCharges.toFixed(2)}</span>
                                </div>
                                <div className="bg-[#e9e9e9] h-px" />

                                <div className="flex justify-between mb-2">
                                    <span className="text-[16px] font-semibold leading-6 text-[#2B2B2D]">Total Amount</span>
                                    <span className="text-[22px] leading-6 text-[#000000] font-semibold">${total.toFixed(2)}</span>
                                </div>

                                {cart.length === 0 ? (
                                    <div className="text-center py-8 text-gray-500">
                                        Your cart is empty
                                    </div>
                                ) : (
                                    cart.map((item:any) => {
                                        const itemPrice = item.discount 
                                            ? item.price - (item.price * item.discount / 100)
                                            : item.price;
                                        
                                        return (
                                            <div key={item.id} className="flex gap-3">
                                                <img 
                                                    src={item.image || "/Product1.svg"} 
                                                    alt={item.name || "Product image"} 
                                                    className="w-20 h-20 object-cover rounded" 
                                                />
                                                <div className="flex-1 flex flex-col gap-2">
                                                    <span className="text-[15px] leading-[18px] font-normal text-[#000000]">
                                                        {item.name}
                                                    </span>
                                                    <div className="flex gap-2">
                                                        {[...Array(5)].map((_, i) => (
                                                            <Star 
                                                                key={i} 
                                                                size={14} 
                                                                className={i < (item.rating || 5) ? "text-[#F4A263] fill-[#F4A263]" : "text-gray-300"} 
                                                            />
                                                        ))}
                                                    </div>

                                                    <div className="flex gap-2 items-center">
                                                        <span className="font-poppins text-[16px] leading-7 text-[#64B496]">
                                                            ${(itemPrice * item.quantity).toFixed(2)}
                                                        </span>
                                                        {item.discount && (
                                                            <span className="font-poppins text-[13px] leading-[23px] text-[#7A7A7A] line-through">
                                                                ${(item.price * item.quantity).toFixed(2)}
                                                            </span>
                                                        )}
                                                        {item.quantity > 1 && (
                                                            <span className="text-[13px] text-gray-600">
                                                                (x{item.quantity})
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })
                                )}
                            </div>
                        </div>

                        
                        <div className="w-full max-w-[416px] px-4 py-4 border border-[#E9E9E9] rounded-[5px] flex flex-col gap-2">
                            <span className="text-[20px] leading-6 text-[#000000]">Delivery Method</span>

                            <span className="text-[14px] leading-6 text-[#7A7A7A]">
                                Please select the preferred shipping method to use this order
                            </span>

                            <div className="flex flex-col sm:flex-row justify-between gap-3 mt-3">
                                <div>
                                    <span className="text-[15px] leading-[15px] text-[#2B2B2D]">Free Shipping</span>
                                    <div className="flex gap-2 items-center mt-1">
                                        <input
                                            type="checkbox"
                                            className="appearance-none w-4 h-4 rounded-full border-2 border-red-500 cursor-pointer relative
          checked:before:content-[''] checked:before:absolute checked:before:top-1/2 checked:before:left-1/2 
          checked:before:-translate-x-1/2 checked:before:-translate-y-1/2 
          checked:before:w-2.5 checked:before:h-2.5 checked:before:rounded-full checked:before:bg-red-500"
                                        />
                                        <span className="text-[14px] leading-4 text-[#7A7A7A]">
                                            Rate - $0.00 Shipping
                                        </span>
                                    </div>
                                </div>

                                <div>
                                    <span className="text-[15px] leading-[15px] text-[#2B2B2D]">Express Shipping</span>
                                    <div className="flex gap-2 items-center mt-1">
                                        <input
                                            type="checkbox"
                                            className="appearance-none w-4 h-4 rounded-full border-2 border-red-500 cursor-pointer relative
          checked:before:content-[''] checked:before:absolute checked:before:top-1/2 checked:before:left-1/2 
          checked:before:-translate-x-1/2 checked:before:-translate-y-1/2 
          checked:before:w-2.5 checked:before:h-2.5 checked:before:rounded-full checked:before:bg-red-500"
                                        />
                                        <span className="text-[14px] leading-4 text-[#7A7A7A]">
                                            Rate - $5.00 Shipping
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        
                        <div className="w-full max-w-[416px] px-4 py-4 border border-[#E9E9E9] rounded-[5px] flex flex-col gap-3">
                            <span className="text-[20px] leading-6 text-[#000000]">Payment Method</span>

                            <span className="text-[14px] leading-6 text-[#7A7A7A]">
                                Please select your preferred payment method for this order
                            </span>

                            <div className="flex flex-col gap-3 mt-3">
                                <div className="flex items-center gap-3">
                                    <input
                                        type="radio"
                                        name="payment"
                                        className="appearance-none w-4 h-4 rounded-full border-2 border-red-500 cursor-pointer relative
        checked:before:content-[''] checked:before:absolute checked:before:top-1/2 checked:before:left-1/2 
        checked:before:-translate-x-1/2 checked:before:-translate-y-1/2 
        checked:before:w-2.5 checked:before:h-2.5 checked:before:rounded-full checked:before:bg-red-500"
                                    />
                                    <div className="flex flex-col">
                                        <span className="text-[15px] leading-[15px] text-[#2B2B2D]">Cash on Delivery</span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <input
                                        type="radio"
                                        name="payment"
                                        className="appearance-none w-4 h-4 rounded-full border-2 border-red-500 cursor-pointer relative
        checked:before:content-[''] checked:before:absolute checked:before:top-1/2 checked:before:left-1/2 
        checked:before:-translate-x-1/2 checked:before:-translate-y-1/2 
        checked:before:w-2.5 checked:before:h-2.5 checked:before:rounded-full checked:before:bg-red-500"
                                    />
                                    <div className="flex flex-col">
                                        <span className="text-[15px] leading-[15px] text-[#2B2B2D]">UPI</span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <input
                                        type="radio"
                                        name="payment"
                                        className="appearance-none w-4 h-4 rounded-full border-2 border-red-500 cursor-pointer relative
        checked:before:content-[''] checked:before:absolute checked:before:top-1/2 checked:before:left-1/2 
        checked:before:-translate-x-1/2 checked:before:-translate-y-1/2 
        checked:before:w-2.5 checked:before:h-2.5 checked:before:rounded-full checked:before:bg-red-500"
                                    />
                                    <div className="flex flex-col">
                                        <span className="text-[15px] leading-[15px] text-[#2B2B2D]">Bank Transfer</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        
                        <div className="w-full max-w-[416px] flex flex-col gap-3 px-4 py-4 border border-[#E9E9E9] rounded-[5px]">
                            <span className="text-[20px] leading-6 text-[#000000]">Payment Method</span>
                            <img src="/Visa.svg" alt="Visa Image" />
                        </div>
                    </div>

                    
                    <div className="w-full lg:w-auto flex-1">
                       
                        <div className="w-full border border-[#E9E9E9] px-4 sm:px-6 py-6 rounded-[5px] flex flex-col gap-4">
                            <div className="text-[20px] leading-5 text-[#2B2B2D] font-semibold">Customer</div>

                            <div className="space-y-2">
                                <div className="text-gray-600 text-sm mb-4">Checkout Options</div>

                                <div className="text-[20px] leading-5 text-[#2B2B2D] font-semibold mb-6">Returning Customer</div>

                                <div className="space-y-4">
                                    <div className="mt-8">
                                        <label className="block text-[15px] leading-[15px] font-normal text-[#2B2B2D] mb-1">Email Address</label>
                                        <input
                                            type="email"
                                            placeholder="Enter your email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            disabled={otpSent}
                                            className="w-full border border-gray-300 text-[#757575] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 disabled:bg-gray-100"
                                        />
                                    </div>

                                    {!otpSent ? (
                                        <div className="flex justify-center py-8">
                                            <button
                                                type="button"
                                                onClick={handleRequestOtp}
                                                disabled={loading}
                                                className="w-[106px] h-10 bg-[#F53E32] text-white font-semibold rounded-lg hover:bg-red-600 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                                            >
                                                {loading ? "Sending..." : "Send OTP"}
                                            </button>
                                        </div>
                                    ) : (
                                        <>
                                            <div className="mt-8">
                                                <label className="block text-[15px] leading-[15px] font-normal text-[#2B2B2D] mb-1">OTP</label>
                                                <input
                                                    type="text"
                                                    placeholder="Enter OTP"
                                                    value={otp}
                                                    onChange={(e) => setOtp(e.target.value)}
                                                    className="w-full border border-gray-300 text-[#757575] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                                                />
                                            </div>

                                            <div className="flex justify-center py-8">
                                                <button
                                                    type="button"
                                                    onClick={handleVerifyOtp}
                                                    disabled={loading}
                                                    className="w-[106px] h-10 bg-[#F53E32] text-white font-semibold rounded-lg hover:bg-red-600 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                                                >
                                                    {loading ? "Verifying..." : "Verify"}
                                                </button>
                                            </div>
                                        </>
                                    )}

                                    {error && (
                                        <div className="text-red-500 text-sm text-center mt-2">
                                            {error}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        
                        <div className="mt-4 w-full border border-[#E9E9E9] px-4 sm:px-6 py-6 rounded-[5px] flex flex-col gap-4">
                            <div className="text-[20px] leading-5 text-[#2B2B2D] font-semibold">Billing Details</div>

                            {!isVerified ? (
                                <div className="text-center py-8 text-gray-500">
                                    Please verify your email to continue
                                </div>
                            ) : (
                                <div className="space-y-2">
                                    <div className="text-gray-600 text-sm mb-4">Enter your shipping information</div>

                                    <div className="space-y-4">
                                        <div className="flex flex-col sm:flex-row gap-4">
                                            <div className="flex-1">
                                                <label className="block text-[15px] leading-[15px] font-normal text-[#2B2B2D] mb-1">First Name*</label>
                                                <input
                                                    type="text"
                                                    placeholder="Enter your first name"
                                                    value={billingDetails.firstName}
                                                    onChange={(e) => handleBillingChange('firstName', e.target.value)}
                                                    className="w-full border border-gray-300 text-[#757575] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                                                />
                                            </div>
                                            <div className="flex-1">
                                                <label className="block text-[15px] leading-[15px] font-normal text-[#2B2B2D] mb-1">Last Name*</label>
                                                <input
                                                    type="text"
                                                    placeholder="Enter your last name"
                                                    value={billingDetails.lastName}
                                                    onChange={(e) => handleBillingChange('lastName', e.target.value)}
                                                    className="w-full border border-gray-300 text-[#757575] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                                                />
                                            </div>
                                        </div>

                                        <div className="mt-2">
                                            <label className="block text-[15px] leading-[15px] font-normal text-[#2B2B2D] mb-1">Address</label>
                                            <input
                                                type="text"
                                                placeholder="Address Line 1"
                                                value={billingDetails.address}
                                                onChange={(e) => handleBillingChange('address', e.target.value)}
                                                className="w-full border border-gray-300 text-[#757575] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                                            />
                                        </div>

                                        <div className="flex flex-col sm:flex-row gap-4">
                                            <div className="flex-1 mt-2">
                                                <label className="block text-[15px] leading-[15px] font-normal text-[#2B2B2D] mb-1">City*</label>
                                                <input
                                                    type="text"
                                                    placeholder="City"
                                                    value={billingDetails.city}
                                                    onChange={(e) => handleBillingChange('city', e.target.value)}
                                                    className="w-full border border-gray-300 text-[#757575] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                                                />
                                            </div>
                                            <div className="flex-1 mt-2">
                                                <label className="block text-[15px] leading-[15px] font-normal text-[#2B2B2D] mb-1">Post Code</label>
                                                <input
                                                    type="text"
                                                    placeholder="Post Code"
                                                    value={billingDetails.postCode}
                                                    onChange={(e) => handleBillingChange('postCode', e.target.value)}
                                                    className="w-full border border-gray-300 text-[#757575] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                                                />
                                            </div>
                                        </div>

                                        <div className="flex flex-col sm:flex-row gap-4">
                                            <div className="flex-1">
                                                <label className="block text-[15px] leading-[15px] font-normal text-[#2B2B2D] mb-1">Country*</label>
                                                <input
                                                    type="text"
                                                    placeholder="Country"
                                                    value={billingDetails.country}
                                                    onChange={(e) => handleBillingChange('country', e.target.value)}
                                                    className="w-full border border-gray-300 text-[#757575] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                                                />
                                            </div>
                                            <div className="flex-1">
                                                <label className="block text-[15px] leading-[15px] font-normal text-[#2B2B2D] mb-1">Region State</label>
                                                <input
                                                    type="text"
                                                    placeholder="Region/State"
                                                    value={billingDetails.regionState}
                                                    onChange={(e) => handleBillingChange('regionState', e.target.value)}
                                                    className="w-full border border-gray-300 text-[#757575] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        
                        <div className="flex justify-center lg:justify-end mt-6">
                            <button 
                                onClick={handlePlaceOrder}
                                disabled={!isVerified || loading}
                                className="w-[130px] h-10 rounded-[5px] bg-[#F53E32] text-white text-[14px] font-bold leading-[17px] hover:cursor-pointer hover:bg-[#f03022] transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                            >
                                {loading ? "Processing..." : "Place Order"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page