class Api::BenchesController < ApplicationController

    def index
        @benches = Bench.all
        render 'api/benches/index'
    end

    def create
        @bench = Bench.new(bench_params);
        if @bench.save
            render 'api/benches/show'
        end
    end

    private

    def bench_params
        params.require(:bench).permit(:description, :lat, :lng)
    end

end
