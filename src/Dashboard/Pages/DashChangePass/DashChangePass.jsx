const DashChangePass = () => {
  return (
    <div className="flex justify-center items-center pt-20">
      <div className="p-12 rounded-lg bg-slate-500 max-w-md mx-auto">
        <h1 className="text-4xl font-bold">Change Password</h1>
        <p className="py-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, blanditiis.</p>
        <form className="max-w-lg w-100">
          <div className="form-control pb-4">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" placeholder="Password" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Confirm Password</span>
            </label>
            <input type="password" placeholder="Confirm Password" className="input input-bordered" required />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral">Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default DashChangePass