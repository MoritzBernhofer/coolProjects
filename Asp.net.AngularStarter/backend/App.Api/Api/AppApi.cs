using App.Api.Api.TestApi;

namespace App.Api.Api;

public static class AppApi
{
    public static IEndpointRouteBuilder MapApis(this IEndpointRouteBuilder app)
    {
        app.MapTestApi();

        return app;
    }
}